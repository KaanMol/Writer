import React from "react";
import { useRecoilState } from "recoil";
import { CoreAPI } from "./core";
import { editorStore } from "./stores/editorStore";
import { Wrapper } from "./Wrapper";

export function Editor(props: any) {
	// const [components, setComponent] = useRecoilState(textState);
	const components = editorStore;
	function onKeyUp(e: any) {
		const id =
			window.getSelection()?.anchorNode?.parentElement?.parentElement?.id;
		for (let i = 0; i < components.components.length; i++) {
			if (components.components[i].id === id) {
				const newValue =
					window.getSelection()?.anchorNode?.parentElement?.innerText;
				components.components[i].api.setValue(newValue as any);
			}
		}
	}

	// TODO: Clean this up, this is a hack
	return (
		<div contentEditable="true" onKeyUp={onKeyUp}>
			{components.components.map((component) => (
				<Wrapper key={component.id} id={component.id}>
					{React.createElement(
						component.component as any,
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
