import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Editor } from "./Editor";
import { RecoilRoot } from "recoil";

function App() {
    return (
        <RecoilRoot>
            <div className="App">
                <Editor />
            </div>
        </RecoilRoot>
    );
}

export default App;
