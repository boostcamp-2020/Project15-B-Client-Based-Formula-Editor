import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	addBookmarkItem,
	setCustomFormValue,
	setLatexInput,
	removeAllBookmarkItems,
	openConfirmModal,
} from "../slice";
import { BOOKMARK_TAB, CUSTOM_COMMAND_TAB } from "../constants/sidebarTab";
import ListLayout from "../layouts/ListLayout";
import ListItem from "../presentationals/ListItem";
import SideBarHeader from "../presentationals/SideBarHeader";
import BookmarkAddButton from "../presentationals/BookmarkAddButton";
import EmptyItem from "../presentationals/EmptyItem";

export default function BookmarkContainer({ onScroll, setSidebar, setTabState }) {
	const dispatch = useDispatch();
	const { bookmarkItems, latexInput } = useSelector(state => state);

	const handleCustomButtonClick = latex => () => {
		dispatch(setCustomFormValue({ state: true, name: "등록", command: "", latex }));
		setTabState(CUSTOM_COMMAND_TAB);
	};

	const handleFormulaClick = latex => () => {
		dispatch(setLatexInput(latex));
		setSidebar(false);
	};

	const addCurrentLatexToBookmark = () => {
		if (!latexInput) return;
		dispatch(addBookmarkItem(latexInput));
	};

	const handleDeleteButton = id => () => {
		dispatch(openConfirmModal({ tabId: BOOKMARK_TAB, id }));
	};

	const handleDeleteAllClick = () => {
		if (confirm("모든 북마크를 삭제하시겠습니까?")) {
			dispatch(removeAllBookmarkItems());
		}
	};

	return (
		<ListLayout onScroll={onScroll}>
			<BookmarkAddButton onClick={addCurrentLatexToBookmark}/>
			<SideBarHeader
				title={"북마크 수식 목록"}
				onClick={handleDeleteAllClick}
			/>
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
		</ListLayout>
	);
}

