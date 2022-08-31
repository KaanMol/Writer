import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { useRecoilState } from "recoil";
import { CoreAPI } from "./core";
import { componentStore } from "./stores/componentStore";
import { editorStore } from "./stores/editorStore";
import { Wrapper } from "./Wrapper";

export function Editor(props: any) {
	const [components, setComponents] = useState(editorStore.components);

	function onKeyUp(e: any) {
		const id =
			window.getSelection()?.anchorNode?.parentElement?.parentElement?.id;
		for (let i = 0; i < editorStore.components.length; i++) {
			if (editorStore.components[i].id === id) {
				const newValue =
					window.getSelection()?.anchorNode?.parentElement?.innerText;
				editorStore.components[i].api.setValue(newValue as any);
			}
		}
	}

	const load = () => {
		let loadedComponents = JSON.parse(
			localStorage.getItem("components") as string
		);

		loadedComponents.map((component: any) => {
			const componentType = componentStore.filter(
				(registeredComponent) =>
					registeredComponent.name === component.type
			);
			component.component = componentType[0];
			component.api = new CoreAPI(component.id, component.value);
		});

		editorStore.components = loadedComponents;
		setComponents(loadedComponents);
	};

	const save = () => {
		let objects = [];
		for (let i = 0; i < components.length; i++) {
			objects.push({
				id: components[i].id,
				type: components[i].component.name,
				value: components[i].api.value,
			});
		}

		localStorage.setItem("components", JSON.stringify(objects));
	};

	// TODO: Clean this up, this is a hack
	return (
		<>
			<button onClick={load}>Load</button>
			<button onClick={save}>Save</button>
			<div onKeyUp={onKeyUp}>
				<ReactSortable list={components} setList={setComponents}>
					{components.map((component) => (
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
				</ReactSortable>
			</div>
		</>
	);
}
