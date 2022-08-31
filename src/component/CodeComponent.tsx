import { useState } from "react";
import { CoreAPI } from "../core";
import SyntaxHighlighter from "react-syntax-highlighter";

export function CodeComponent(props: {
	api: CoreAPI<{ language: string; code: string }>;
}) {
	const [code, setCode] = useState(props.api.value.code);
	const [language, setLanguage] = useState(props.api.value.language);

	return (
		<>
			<input
				contentEditable="false"
				placeholder="Language"
				value={language}
				onChange={(e) => setLanguage(e.target.value)}
			/>
			<input
				contentEditable="false"
				placeholder="Code"
				value={code}
				onChange={(e) => setCode(e.target.value)}
			/>

			<SyntaxHighlighter contentEditable="false" language={language}>
				{code}
			</SyntaxHighlighter>
		</>
	);
}
