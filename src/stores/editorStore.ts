import { atom } from "recoil";
import { H1Component } from "../component/H1Component";
import { CoreAPI } from "../core";

export const editorStore = {
    components: [
        {
            id: "0",
            component: H1Component,
            api: new CoreAPI("0", "Hello World!")
        },
        {
            id: "1",
            component: H1Component,
            api: new CoreAPI("1", "Hello World2!")
        }
    ]
}


// export const textState = atom({
//     key: 'editor',
//     default: {
//         components: [
//             {
//                 id: "0",
//                 component: H1Component,
//                 api: new CoreAPI("0", "Hello World!")
//             },
//             {
//                 id: "1",
//                 component: H1Component,
//                 api: new CoreAPI("1", "Hello World2!")
//             }
//         ]
//     },
// });