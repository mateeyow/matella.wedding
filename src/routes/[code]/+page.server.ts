import type { InviteData } from '$lib/types';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params, locals, cookies }) => {
	cookies.set('code', params.code, { path: '/' });

	try {
		const record = await locals.pb
			.collection('invites')
			.getFirstListItem<InviteData>(`code = "${params.code}"`);

		return record;
	} catch (err) {
		console.error('err', err);
		return redirect(302, '/');
	}
};
