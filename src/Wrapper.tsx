export function Wrapper(props: { children: React.ReactNode, id: number }) {
    return <div className="wrapper" id={props.id.toString()}>{props.children}</div>;
}