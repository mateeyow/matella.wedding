import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ cookies, locals }) => {
	const code = cookies.get('code');

	if (code) {
		await locals.pb.collection('gifts').create({ code });
	} else {
		console.info('A gift attempt was made without a code');
	}

	return json({ success: true });
};
