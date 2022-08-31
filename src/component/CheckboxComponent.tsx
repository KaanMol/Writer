import { useState } from "react";
import { CoreAPI } from "../core";

export function CheckboxComponent(props: {
	api: CoreAPI<{ checked: boolean; text: string }>;
}) {
	const [checked, setCheck] = useState(props.api.value.checked);
	const [text, setText] = useState(props.api.value.text);

	function onCheckboxChange(e: any) {
		const newValue = e.target.checked;
		props.api.setValue({ checked: newValue, text: text });
		setCheck(newValue);
	}

	return (
		<>
			<input
				type="checkbox"
				id={`checkbox${props.api.id}`}
				name={`checkbox${props.api.id}`}
				checked={checked as boolean}
				onChange={onCheckboxChange}
			/>
			<label htmlFor={`checkbox${props.api.id}`}>{text}</label>
		</>
	);
}
