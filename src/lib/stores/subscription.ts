import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { LS_SUBSCRIPTION } from '$lib/constants';

export const createSubscription = () => {
	const store = writable(false);
	const { subscribe, set, update } = store;

	if (browser) {
		const value = localStorage.getItem(LS_SUBSCRIPTION);
		if (value) {
			set(JSON.parse(value));
		}
	}

	return {
		subscribe,
		set: (val: boolean) => {
			if (browser) {
				localStorage.setItem(LS_SUBSCRIPTION, JSON.stringify(val));
			}
			set(val);
		},
		toggle: () => {
			update((val) => {
				if (browser) {
					localStorage.setItem(LS_SUBSCRIPTION, JSON.stringify(!val));
				}
				return !val;
			});
		}
	};
};

export const subscribed = createSubscription();
