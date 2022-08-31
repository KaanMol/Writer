import { useState } from "react";
import { CoreAPI } from "../core";
import SyntaxHighlighter from "react-syntax-highlighter";

export function CodeComponent(props: {
	api: CoreAPI<{ language: string; code: string }>;
}) {
	const [code, setCode] = useState(props.api.value.code);
	const [language, setLanguage] = useState(props.api.value.language);

	function onCodeChange(e: any) {
		const newValue = e.target.value;
		props.api.setValue({ language: language, code: newValue });
		setCode(newValue);
	}

	function onLanguageChange(e: any) {
		const newValue = e.target.value;
		props.api.setValue({ language: newValue, code: code });
		setLanguage(newValue);
	}

	return (
		<>
			<input
				contentEditable="false"
				placeholder="Language"
				value={language}
				onChange={onLanguageChange}
			/>
			<input
				contentEditable="false"
				placeholder="Code"
				value={code}
				onChange={onCodeChange}
			/>

			<SyntaxHighlighter contentEditable="false" language={language}>
				{code}
			</SyntaxHighlighter>
		</>
	);
}
