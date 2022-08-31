import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { CoreAPI } from "./core";
import { CSS } from "@dnd-kit/utilities";

export function Wrapper(props: { children: JSX.Element; id: string }) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: props.id });
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			className="wrapper"
			id={props.id}
		>
			{props.children}
		</div>
	);
}
