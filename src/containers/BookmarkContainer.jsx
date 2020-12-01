import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addBookmarkItem, deleteBookmarkItem, setCustomFormValue, setLatexInput } from "../slice";

import ListLayout from "../layouts/ListLayout";
import ListItem from "../presentationals/ListItem";
import SideBarHeader from "../presentationals/SideBarHeader";
import BookmarkAddButton from "../presentationals/BookmarkAddButton";
import EmptyItem from "../presentationals/EmptyItem";
import { CUSTOM_COMMAND_TAB } from "../constants/sidebarTabNames";

export default function BookmarkContainer({ onScroll, setSidebar, setTabState }) {
	const dispatch = useDispatch();
	const { bookmarkItems } = useSelector(state => state);

	const handleCustomButtonClick = latex => () => {
		dispatch(setCustomFormValue({ state: true, name: "등록", command: "", latex }));
		setTabState(CUSTOM_COMMAND_TAB);
	};

	const handleFormulaClick = latex => () => {
		dispatch(setLatexInput(latex));
		setSidebar(false);
	};

	const addCurrentLatexToBookmark = () => {
		dispatch(addBookmarkItem());
	};

	const handleDeleteButton = index => () => {
		dispatch(deleteBookmarkItem(index));
	};

	return (
		<ListLayout onScroll={onScroll}>
			<SideBarHeader title={"북마크 수식 목록"} />
			{bookmarkItems.length ?
				bookmarkItems.map((val, index) =>
					<ListItem
						key={index}
						latex={val.latex}
						customOnClick={handleCustomButtonClick(val.latex)}
						intoLatexFieldOnClick={handleFormulaClick(val.latex)}
						deleteOnClick={handleDeleteButton(index)}
					/>,
				) :
				<EmptyItem content="북마크 수식이 없습니다."/>
			}
			<BookmarkAddButton onClick={addCurrentLatexToBookmark}/>
		</ListLayout>
	);
}
