import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const LS_KEY = 'subscription';
export const createSubscription = () => {
	const store = writable(false);
	const { subscribe, set, update } = store;

	if (browser) {
		const value = localStorage.getItem(LS_KEY);
		if (value) {
			set(JSON.parse(value));
		}
	}

	return {
		subscribe,
		set: (val: boolean) => {
			if (browser) {
				localStorage.setItem(LS_KEY, JSON.stringify(val));
			}
			set(val);
		},
		toggle: () => {
			update((val) => {
				if (browser) {
					localStorage.setItem(LS_KEY, JSON.stringify(!val));
				}
				return !val;
			});
		}
	};
};

export const subscribed = createSubscription();
