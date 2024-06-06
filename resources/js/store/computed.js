import { defineStore } from 'pinia';

export const usePresentationStore = defineStore('presentation', {
    state: () => ({
        presentation: false
    }),
});
