import React from "react";

import ListLayout from "../layouts/ListLayout";
import ListItem from "../presentationals/ListItem";
import SideBarHeader from "../presentationals/SideBarHeader";
import BookmarkAddButton from "../presentationals/BookmarkAddButton";

export default function BookmarkContainer({ onScroll }) {
	const bookmarkItems = [{ id: 0, latex: "2 + 3" }, { id: 1, latex: "4 + 5" }, { id: 2, latex: "6 + 7" }];

	const handleCustomButtonClick = () => {
		console.log("custom");
	};

	return (
		<ListLayout onScroll={onScroll}>
			<SideBarHeader title={"북마크 수식 목록"} />
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

