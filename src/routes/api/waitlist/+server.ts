import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { prisma } from '$lib/server/prisma';

export const POST: RequestHandler = async ({ request, cookies }) => {
	try {
		const { email, referralCode } = await request.json();

		if (!email) {
			return json({ error: 'Email is required' }, { status: 400 });
		}

		const existingEntry = await prisma.waitlistEntry.findUnique({
			where: { email },
			select: {
				email: true,
				referralCount: true,
				hasAppAccess: true,
				hasRateLimit: true,
				hasCredit: true,
				referralCode: true
			}
		});

		if (existingEntry) {
			return json({ 
				error: 'Email already registered',
				stats: {
					referralCount: existingEntry.referralCount,
					hasAppAccess: existingEntry.hasAppAccess,
					hasRateLimit: existingEntry.hasRateLimit,
					hasCredit: existingEntry.hasCredit,
					referralCode: existingEntry.referralCode
				}
			}, { status: 400 });
		}

		// Handle referral logic
		let referringEntry = null;
		if (referralCode) {
			referringEntry = await prisma.waitlistEntry.findUnique({
				where: { referralCode }
			});

			if (!referringEntry) {
				return json({ error: 'Invalid referral code' }, { status: 400 });
			}
		}

		// Create new entry with referral relationship if applicable
		const entry = await prisma.waitlistEntry.create({
			data: {
				email,
				referredById: referringEntry?.id
			}
		});

		// Use transaction to ensure atomic updates for referral counting
		const result = await prisma.$transaction(async (tx) => {
			if (referringEntry) {
				// Get latest referrer data within transaction
				const currentReferrer = await tx.waitlistEntry.findUnique({
					where: { id: referringEntry.id }
				});
				
				if (!currentReferrer) {
					throw new Error('Referrer no longer exists');
				}

				const newCount = currentReferrer.referralCount + 1;
				
				// Update referrer's counts and tier status atomically
				const updatedReferrer = await tx.waitlistEntry.update({
					where: { id: referringEntry.id },
					data: {
						referralCount: newCount,
						hasAppAccess: newCount >= 3,
						hasRateLimit: newCount >= 6,
						hasCredit: newCount >= 9
					}
				});
			}

			// Return the complete entry data
			return await tx.waitlistEntry.findUnique({
				where: { id: entry.id },
				include: {
					referredBy: {
						select: {
							id: true,
							email: true,
							referralCount: true
						}
					}
				}
			});
		});

		// Set long-lived cookie for referral tracking (30 days)
		cookies.set('waitlist_email', email, {
			path: '/',
			maxAge: 60 * 60 * 24 * 30, // 30 days in seconds
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax'
		});

		return json({
			success: true,
			entry: {
				...result,
				referralCode: result.referralCode
			}
		});
	} catch (error) {
		console.error('Waitlist submission error:', error);
		return json({ error: 'Failed to submit to waitlist' }, { status: 500 });
	}
};