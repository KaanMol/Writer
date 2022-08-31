import { useNavigate } from "react-router-dom";
import { db } from "./db";
import { uuid } from "./helpers/uuid";

export function DocumentCreator() {
	let navigate = useNavigate();

	const createNewPage = () => {
		const documentUuid = uuid();
		db.documents
			.add({
				id: documentUuid,
				components: [
					{
						id: "0",
						componentType: "H1Component",
						value: `Hello from document ${documentUuid}`,
					},
					{
						id: "1",
						componentType: "CodeComponent",
						value: {
							language: "javascript",
							code: "console.log('hi')",
						},
					},
					{
						id: "2",
						componentType: "CheckboxComponent",
						value: { checked: true, text: "Do the wash" },
					},
					{
						id: "3",
						componentType: "ImageComponent",
						value: {
							src: "https://motornl-verzekering.nl/wp-content/uploads/2020/07/08-2020_KTM_-Super_Duke_R-1024x683.jpg",
						},
					},
				],
			})
			.then((doc) => {
				console.log("new Doc:");
				navigate(`/${doc}`);
			});
	};
	return (
		<button onClick={createNewPage}>Create new page and go to page!</button>
	);
}
