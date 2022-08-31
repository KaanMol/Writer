import { useState } from "react";
import { CoreAPI } from "../core";
import SyntaxHighlighter from 'react-syntax-highlighter';

export function CodeComponent(props: { api: CoreAPI<{ language: string, code: string }> }) {
	const [text, setText] = useState(props.api.value.code);
	const [language, setLanguage] = useState(props.api.value.language);

    function onChange(e: any) {
        const newValue = e.target.value;
        setText(newValue);
    }

    function onLanguageChange(e: any) {
        const newValue = e.target.value;
        setLanguage(newValue);
    }

	return <>
        <input contentEditable="false" placeholder="Language" onChange={onLanguageChange}/>
        <input contentEditable="false" onChange={onChange}/>
        <SyntaxHighlighter contentEditable="false" language={language}>
            {text}
        </SyntaxHighlighter>
    </>;
}
