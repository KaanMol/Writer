import { useState } from "react";
import { CoreAPI } from "../core";

export function H1Component(props: { api: CoreAPI }) {
	const [text, setText] = useState(props.api.value);

	props.api.listeners.onValueChanged = (newValue: any) => {
		console.log("Update received! New value: ", newValue);
		setText(text);
	};

	return <h1 contentEditable="true">{text}</h1>;
}
