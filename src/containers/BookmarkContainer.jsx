import React from "react";

import ListItem from "../presentationals/ListItem";
import ListLayout from "../layouts/ListLayout";
import BookmarkAddButton from "../presentationals/BookmarkAddButton";

export default function BookmarkContainer() {
	const bookmarkItems = [{ id: 0, latex: "2 + 3" }, { id: 1, latex: "4 + 5" }, { id: 2, latex: "6 + 7" }];

	const handleCustomButtonClick = () => {
		console.log("custom");
	};

	return (
		<ListLayout>
			{bookmarkItems.map(({ id, latex }) =>
				<ListItem
					key={id}
					latex={latex}
					customOnClick={handleCustomButtonClick}
				/>)}
			<BookmarkAddButton />
		</ListLayout>
	);
}

