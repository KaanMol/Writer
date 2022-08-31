import { useLiveQuery } from "dexie-react-hooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "./db";
import { DocumentCreator } from "./DocumentCreator";
import styles from "./styles/documents.module.scss";

export function Documents() {
	const documents = useLiveQuery(async () => {
		//
		// Query the DB using our promise based API.
		// The end result will magically become
		// observable.
		//
		const documents = await db.documents.toArray();
		return documents.map((item) => {
			return item.id;
		});
	});

	useEffect(() => {});
	return (
		<div className={styles.documents}>
			{documents?.map((document) => (
				<>
					<Link to={`/${document}`}>{document}</Link>
					<br />
				</>
			))}
			<DocumentCreator />
		</div>
	);
}
