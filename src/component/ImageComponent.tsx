import { useState } from "react";
import { CoreAPI } from "../core";

export function ImageComponent(props: { api: CoreAPI<{ src: string }> }) {
	const [text, setText] = useState(props.api.value);

    function onChange(e: any) {
        console.log(121)
        const newValue = e.target.value;
        setText({ src: newValue });
    }

	return <>
        <input onChange={onChange}/>
        <img src={text.src} />
    </>;
}
