import { atom } from "recoil";
import { H1Component } from "../component/H1Component";

export const textState = atom({
    key: 'editor',
    default: {
        components: [
            {
                id: "0",
                component: H1Component,
                value: "Hello World!"
            },
            {
                id: "1",
                component: H1Component,
                value: "Hello World2!"
            }
        ]
    },
});