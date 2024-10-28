import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { prisma } from '$lib/server/prisma';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { email } = await request.json();

		if (!email) {
			return json({ error: 'Email is required' }, { status: 400 });
		}

		const existingEntry = await prisma.waitlistEntry.findUnique({
			where: { email }
		});

		if (existingEntry) {
			return json({ error: 'Email already registered' }, { status: 400 });
		}

		const entry = await prisma.waitlistEntry.create({
			data: { email }
		});

		return json({ success: true, entry });
	} catch (error) {
		console.error('Waitlist submission error:', error);
		return json({ error: 'Failed to submit to waitlist' }, { status: 500 });
	}
};
