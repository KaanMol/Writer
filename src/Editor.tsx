import React, { useCallback, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CoreAPI } from "./core";
import { db } from "./db";
import { uuid } from "./helpers/uuid";
import { componentStore } from "./stores/componentStore";
import { Component } from "./stores/editorStore";
import { Wrapper } from "./Wrapper";

export function Editor(props: any) {
	let { id } = useParams();

	const [components, setComponents] = useState<Component[]>([]);

	const load = (items: any) => {
		let loadedComponents = items;

		loadedComponents.map((component: any) => {
			const componentType = componentStore.filter(
				(registeredComponent) =>
					registeredComponent.name === component.componentType
			);
			component.component = componentType[0];
			component.api = new CoreAPI(component.id, component.value);
		});

		// editorStore.components = loadedComponents;
		setComponents([]);
		setTimeout(() => {
			setComponents(loadedComponents);
		}, 0);
	};

	// const save = () => {
	// 	let objects = [];
	// 	for (let i = 0; i < components.length; i++) {
	// 		objects.push({
	// 			id: components[i].id,
	// 			type: components[i].component.name,
	// 			value: components[i].api.value,
	// 		});
	// 	}

	// 	localStorage.setItem("components", JSON.stringify(objects));
	// };

	let navigate = useNavigate();

	// useEffect(() => {}, id);

	useEffect(() => {
		db.documents.get(id as string).then((doc) => {
			console.log(doc);
			if (doc === undefined) {
				navigate("/");
			} else {
				console.log("exists");
				console.log(doc);
				load(doc.components);
			}
		});
	}, [id]);

	function onKeyUp(e: any) {
		const id =
			window.getSelection()?.anchorNode?.parentElement?.parentElement?.id;
		for (let i = 0; i < components.length; i++) {
			if (components[i].id === id) {
				const newValue =
					window.getSelection()?.anchorNode?.parentElement?.innerText;
				components[i].api.setValue(newValue as any);
			}
		}
	}

	const reorder = useCallback((dragIndex: number, hoverIndex: number) => {
		setComponents((prevCards: Component[]) => {
			let newDocument = [...prevCards];

			// Puts the element at the dragIndex index to the hoverIndex index
			newDocument[dragIndex] = [
				newDocument[hoverIndex],
				(newDocument[hoverIndex] = newDocument[dragIndex]),
			][0];

			return newDocument;
		});
	}, []);

	// TODO: Clean this up, this is a hack
	return (
		<>
			{/* <button onClick={load}>Load</button>
			<button onClick={save}>Save</button> */}
			<div onKeyUp={onKeyUp}>
				<DndProvider backend={HTML5Backend}>
					{components.map((component, index) => (
						<Wrapper
							key={component.id}
							id={component.id}
							index={index}
							reorder={reorder}
						>
							{React.createElement(
								component.component as any,
								{
									api: component.api,
								},
								null
							)}
						</Wrapper>
					))}
				</DndProvider>
			</div>
		</>
	);
}
