import React from "react";
import { useRecoilState } from "recoil";
import { CoreAPI } from "./core";
import { textState } from "./stores/editorStore";
import { Wrapper } from "./Wrapper";

export function Editor(props: any) {
	const [components, setComponent] = useRecoilState(textState);
	function onKeyDown(e: any) {
		setComponent((components) => {
			//TODO: This assumes that the ID is index bount
			const newComponents = [...components.components];
			// componentscomponents.components.forEach((item) => {
			//     //TODO: fix this, search higher till you find ID
			//     if (
			//         item.id ===
			//         window.getSelection()?.anchorNode?.parentElement?.parentElement
			//             ?.id
			//     ) {

			//     }
			// });
			console.log(
				window.getSelection()?.anchorNode?.parentElement?.innerText
			);
			newComponents[newComponents.length - 1].value =
				window.getSelection()?.anchorNode?.parentElement
					?.innerText as string;

			return {
				components: newComponents,
			};
		});

		// console.log(
		// );
	}

	return (
		<div contentEditable="true" onKeyDown={onKeyDown}>
			{components.components.map((component) => (
				<Wrapper key={component.id} id={component.id}>
					{React.createElement(
						component.component,
						{
							api: new CoreAPI(component.id, component.value),
						},
						null
					)}
				</Wrapper>
			))}
		</div>
	);
}
