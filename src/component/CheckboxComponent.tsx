import { useState } from "react";
import { CoreAPI } from "../core";

export function CheckboxComponent(props: {
	api: CoreAPI<{ checked: boolean; text: string }>;
}) {
	const [checked, setCheck] = useState(props.api.value.checked);
	const [text, setText] = useState(props.api.value.text);

	return (
		<>
			<input
				type="checkbox"
				id={`checkbox${props.api.id}`}
				name={`checkbox${props.api.id}`}
				checked={checked as boolean}
				onChange={(e) => setCheck(e.target.checked)}
			/>
			<label htmlFor={`checkbox${props.api.id}`}>{text}</label>
		</>
	);
}
