import React from "react";

interface Lol {
    onCopy: (event: React.ClipboardEvent<HTMLDivElement>) => void;
}

class Test extends React.Component implements Lol {

    onCopy = (event: React.ClipboardEvent<HTMLDivElement>) => {
        console.log("onCopy");
    }

    render() {
        return <div>Test</div>;
    }
}