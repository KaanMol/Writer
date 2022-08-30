import { CoreAPI } from "../core";

export function H1Component(props: { api: CoreAPI }) {
    
    console.log(props.api);
    return <h1 contentEditable="true">Hello World</h1>;
}