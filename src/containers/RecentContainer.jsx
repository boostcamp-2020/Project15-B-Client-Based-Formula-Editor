import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	setBookmarkItem,
	setLatexInput,
	setCustomFormValue,
	removeAllRecentItems,
	openConfirmModal,
} from "../slice";
import { RECENT_TAB, CUSTOM_COMMAND_TAB } from "../constants/sidebarTab";
import ListLayout from "../layouts/ListLayout";
import ListItem from "../presentationals/ListItem";
import SideBarHeader from "../presentationals/SideBarHeader";
import EmptyItem from "../presentationals/EmptyItem";

export default function RecentContainer({ onScroll, setTabState, setSidebar }) {
	const { recentItems } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleBookmarkButtonClick = (id, isBookmark) => () => {
		dispatch(setBookmarkItem({ id, isBookmark: !isBookmark }));
	};

	const handleCustomButtonClick = latex => () => {
		dispatch(setCustomFormValue({ state: true, name: "등록", command: "", latex }));
		setTabState(CUSTOM_COMMAND_TAB);
	};

	const handleDeleteButtonClick = id => () => {
		dispatch(openConfirmModal({ tabId: RECENT_TAB, id }));
	};

	const handleFormulaClick = latex => () => {
		dispatch(setLatexInput(latex));
		setSidebar(false);
	};

	const handleDeleteAllClick = () => {
		if (confirm("모든 최근 수식을 삭제하시겠습니까?")) {
			dispatch(removeAllRecentItems());
		}
	};

	return (
		<ListLayout onScroll={onScroll}>
			<SideBarHeader
				title={"최근 수식 목록"}
				onClick={handleDeleteAllClick}
			/>
			{recentItems.length ?
				recentItems.map(({ id, latex, isBookmark }) =>
					<ListItem
						key={id}
						latex={latex}
						bookmarkOnClick={handleBookmarkButtonClick(id, isBookmark)}
						customOnClick={handleCustomButtonClick(latex)}
						deleteOnClick={handleDeleteButtonClick(id)}
						intoLatexFieldOnClick={handleFormulaClick(latex)}
						isBookmark={isBookmark}
					/>,
				) :
				<EmptyItem content={"최근 저장한 수식이 없습니다"}/>}
		</ListLayout>
	);
}

