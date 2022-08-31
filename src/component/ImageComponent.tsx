import { useState } from "react";
import { CoreAPI } from "../core";

export function ImageComponent(props: { api: CoreAPI<{ src: string }> }) {
	const [text, setText] = useState(props.api.value);

	//Cleanup, maybe add a store to CoreAPI
	function onChange(e: any) {
		const newValue = e.target.value;
		props.api.setValue({ src: newValue });
		setText({ src: newValue });
	}

	return (
		<>
			<input onChange={onChange} />
			<img src={text.src} />
		</>
	);
}
