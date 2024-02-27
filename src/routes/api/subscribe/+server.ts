import { error, json, text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { ClientResponseError } from 'pocketbase';

export const prerender = false;

export const POST: RequestHandler = async ({ request, locals, cookies }) => {
	console.log('here');
	const { email } = await request.json();
	console.log('email', email);
	const code = cookies.get('code');

	try {
		await locals.pb.collection('subscribers').create({ email, code });
	} catch (err) {
		if (err instanceof ClientResponseError) {
			return error(500, err.message);
		}

		console.error('unhandled error: ', err);
		return error(500, 'An error occurred');
	}

	return json({ success: true });
};

export const fallback: RequestHandler = async ({ request }) => {
	return text(`I caught your ${request.method} request!`);
};
