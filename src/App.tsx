import "./App.scss";
import { Editor } from "./Editor";
import "material-icons/iconfont/material-icons.css";
import { Documents } from "./Documents";
import { Route, Routes } from "react-router-dom";
import { DocumentCreator } from "./DocumentCreator";

function App() {
	return (
		<div className="App">
			<Documents />
			<Routes>
				<Route path="/" element={<DocumentCreator />} />
				<Route path="/:id" element={<Editor />} />
			</Routes>
		</div>
	);
}

export default App;
