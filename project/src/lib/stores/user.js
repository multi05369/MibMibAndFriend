import { writable } from 'svelte/store';

// Create a store to keep track of user info
export const user = writable(null);
