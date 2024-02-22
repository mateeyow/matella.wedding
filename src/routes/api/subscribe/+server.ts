import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { ClientResponseError } from 'pocketbase';
import z from 'zod';

const SubscribePayload = z.object({
	email: z.string().email(),
	code: z.string().optional()
});

export const POST: RequestHandler = async ({ request, locals, cookies }) => {
	const payload = await request.json();
	const codei = cookies.get('code');
	console.log('codei', codei);

	const result = SubscribePayload.safeParse(payload);

	if (!result.success) {
		result.error.flatten().formErrors;
		return error(400, JSON.stringify(result.error.flatten().fieldErrors));
	}

	const { email, code } = result.data;

	if (!email) {
		return error(400, 'Email address is required');
	}

	try {
		await locals.pb.collection('subscribers').create({ email, code });
	} catch (err) {
		if (err instanceof ClientResponseError) {
			console.error('client error: ', err.response);
			return error(500, err.message);
		}

		console.error('unhandled error: ', err);
		return error(500, 'An error occurred');
	}

	return json({ success: true });
};
