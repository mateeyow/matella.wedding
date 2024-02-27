import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { ClientResponseError } from 'pocketbase';
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	runtime: 'edge'
};

export const POST: RequestHandler = async ({ request, locals }) => {
	const payload = await request.json();

	try {
		await locals.pb.collection('invites').update(payload.id, payload);
	} catch (err) {
		console.error('Error updating invites with payload: ', payload);
		if (err instanceof ClientResponseError) {
			return error(500, err.message);
		}

		console.error('unhandled error: ', err);
		return error(500, 'An error occurred');
	}

	return json({ success: true });
};
