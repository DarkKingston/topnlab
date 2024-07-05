import { defineStore } from 'pinia';

export const usePresentationStore = defineStore('presentation', {
    state: () => ({
        presentation: false
    }),
});

export const useObjectTab = defineStore('object_tab', {
    state: () => ({
        tab: +localStorage.getItem('object_tab') || 0
    }),
});
