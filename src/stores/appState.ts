import { atom } from "recoil";

export const appState = atom<{
    documents: string[]
}>({
    key: 'app',
    default: {
        documents: []
    },
});