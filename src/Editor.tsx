import { H1Component } from "./component/H1Component";
import { CoreAPI } from "./core";
import { Wrapper } from "./Wrapper";

const components: JSX.Element[] = [
	<H1Component api={new CoreAPI()} />,
	<H1Component api={new CoreAPI()} />
];

let id = 0;

export function Editor(props: any) {

	function onKeyDown(e: any) {
		console.log(window.getSelection()?.anchorNode?.parentElement?.parentElement);
	}

	return (
		<div contentEditable="true" onKeyDown={onKeyDown}>
			{components.map(component => <Wrapper id={id++}>{component}</Wrapper>)}
		</div>
	);
};