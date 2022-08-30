import React from "react";
import { useRecoilState } from "recoil";
import { CoreAPI } from "./core";
import { editorStore } from "./stores/editorStore";
import { Wrapper } from "./Wrapper";

export function Editor(props: any) {
	// const [components, setComponent] = useRecoilState(textState);
	const components = editorStore;
	function onKeyDown(e: any) {
		const id =
			window.getSelection()?.anchorNode?.parentElement?.parentElement?.id;
		for (let i = 0; i < components.components.length; i++) {
			if (components.components[i].id === id) {
				// TODO: Fix this hack
				setTimeout(() => {
					const newValue =
						window.getSelection()?.anchorNode?.parentElement
							?.innerText;
					components.components[i].api.setValue(newValue);
				}, 0);
			}
		}
	}

	// TODO: Clean this up, this is a hack
	return (
		<div contentEditable="true" onKeyDown={onKeyDown}>
			{components.components.map((component) => (
				<Wrapper key={component.id} id={component.id}>
					{React.createElement(
						component.component,
						{
							api: component.api,
						},
						null
					)}
				</Wrapper>
			))}
		</div>
	);
}
