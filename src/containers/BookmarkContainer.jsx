import React from "react";

import { useDispatch } from "react-redux";
import { setLatexInput } from "../slice";

import ListLayout from "../layouts/ListLayout";
import ListItem from "../presentationals/ListItem";
import SideBarHeader from "../presentationals/SideBarHeader";
import BookmarkAddButton from "../presentationals/BookmarkAddButton";


export default function BookmarkContainer({ onScroll, setSidebar, setTabState }) {
	const dispatch = useDispatch();
	const bookmarkItems = localStorage.getItem("bookmarkItems") || [];

	const handleCustomButtonClick = () => {
		console.log("custom");
	};

	const handleFormulaClick = latex => () => {
		dispatch(setLatexInput(latex));
		setSidebar(false);
	};

	return (
		<ListLayout onScroll={onScroll}>
			<SideBarHeader title={"북마크 수식 목록"} />
			{bookmarkItems.map((latex, index) =>
				<ListItem
					key={index}
					latex={latex}
					customOnClick={handleCustomButtonClick}
					intoLatexFieldOnClick={handleFormulaClick(latex)}
				/>)}
			<BookmarkAddButton />
		</ListLayout>
	);
}

