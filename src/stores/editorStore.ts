import { atom } from "recoil";
import { CodeComponent } from "../component/CodeComponent";
import { H1Component } from "../component/H1Component";
import { ImageComponent } from "../component/ImageComponent";
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
            component: CodeComponent,
            api: new CoreAPI("1", { language: "javascript", code: "console.log('hi')" })
        },
        {
            id: "2",
            component: ImageComponent,
            api: new CoreAPI("2", { src: "https://motornl-verzekering.nl/wp-content/uploads/2020/07/08-2020_KTM_-Super_Duke_R-1024x683.jpg" })
        },
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