import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { prisma } from '$lib/server/prisma';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { email, referralCode } = await request.json();

		if (!email) {
			return json({ error: 'Email is required' }, { status: 400 });
		}

		const existingEntry = await prisma.waitlistEntry.findUnique({
			where: { email }
		});

		if (existingEntry) {
			return json({ error: 'Email already registered' }, { status: 400 });
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