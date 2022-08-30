import React from "react";
import { CoreAPI } from "./core";

export function Wrapper(props: { children: JSX.Element, id: number }) {
    return (<div className="wrapper" id={props.id.toString()}>
            {React.cloneElement(props.children, { api: new CoreAPI() }) }
        </div>);
}