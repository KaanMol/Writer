import { H1Component } from "./component/H1Component";
import { Wrapper } from "./Wrapper";

const components: JSX.Element[] = [
	<H1Component />
];

let id = 0;

export function Editor(props: any) {
	
	return (
		<div>
			{components.map(component => <Wrapper id={++id}>{component}</Wrapper>)}
		</div>
	);
};