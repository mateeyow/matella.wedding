import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { LS_INVITES } from '$lib/constants';

export const createInvites = () => {
	const store = writable(false);
	const { subscribe, set, update } = store;

	if (browser) {
		const value = localStorage.getItem(LS_INVITES);
		if (value) {
			set(JSON.parse(value));
		}
	}

	return {
		subscribe,
		set: (val: boolean) => {
			if (browser) {
				localStorage.setItem(LS_INVITES, JSON.stringify(val));
			}
			set(val);
		},
		toggle: () => {
			update((val) => {
				if (browser) {
					localStorage.setItem(LS_INVITES, JSON.stringify(!val));
				}
				return !val;
			});
		}
	};
};

export const invites = createInvites();
