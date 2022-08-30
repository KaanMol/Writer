import React from "react";
import { CoreAPI } from "./core";

export function Wrapper(props: { children: JSX.Element; id: string }) {
	return (
		<div className="wrapper" id={props.id}>
			{props.children}
		</div>
	);
}
