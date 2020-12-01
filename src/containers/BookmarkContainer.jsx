import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addBookmarkItem, deleteBookmarkItem, setCustomCommand, setLatexInput } from "../slice";

import ListLayout from "../layouts/ListLayout";
import ListItem from "../presentationals/ListItem";
import SideBarHeader from "../presentationals/SideBarHeader";
import BookmarkAddButton from "../presentationals/BookmarkAddButton";
import EmptyItem from "../presentationals/EmptyItem";

export default function BookmarkContainer({ onScroll, setSidebar, setTabState }) {
	const dispatch = useDispatch();
	const { bookmarkItems, latexInput } = useSelector(state => state);

	const handleCustomButtonClick = latex => () => {
		dispatch(setCustomCommand(latex));
		setTabState(2);
	};

	const handleFormulaClick = latex => () => {
		dispatch(setLatexInput(latex));
		setSidebar(false);
	};

	const addCurrentLatexToBookmark = () => {
		dispatch(addBookmarkItem(latexInput));
	};

	const handleDeleteButton = id => () => {
		dispatch(deleteBookmarkItem(id));
	};

	return (
		<ListLayout onScroll={onScroll}>
			<SideBarHeader title={"북마크 수식 목록"} />
			{bookmarkItems.length ?
				bookmarkItems.map(({ id, latex }) =>
					<ListItem
						key={id}
						latex={latex}
						customOnClick={handleCustomButtonClick(latex)}
						intoLatexFieldOnClick={handleFormulaClick(latex)}
						deleteOnClick={handleDeleteButton(id)}
					/>,
				) :
				<EmptyItem content="북마크 수식이 없습니다."/>
			}
			<BookmarkAddButton onClick={addCurrentLatexToBookmark}/>
		</ListLayout>
	);
}
