import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteRecentItem, setBookmarkItem, setLatexInput } from "../slice";
import ListLayout from "../layouts/ListLayout";
import ListItem from "../presentationals/ListItem";
import SideBarHeader from "../presentationals/SideBarHeader";
import EmptyItem from "../presentationals/EmptyItem";

export default function RecentContainer({ onScroll, setTabState, setSidebar }) {
	const { recentItems } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleBookmarkButtonClick = (id, isBookmark) => () => {
		dispatch(setBookmarkItem({ id, isBookmark: !isBookmark }));
		setTabState(1);
	};

	const handleCustomButtonClick = () => {
		console.log("custom");
	};

	const handleDeleteButtonClick = id => () => {
		if (confirm("정말로 삭제하시겠습니까?")) {
			dispatch(deleteRecentItem(id));
		}
	};

	const handleFormulaClick = latex => () => {
		dispatch(setLatexInput(latex));
		setSidebar(false);
	};

	return (
		<ListLayout onScroll={onScroll}>
			<SideBarHeader title={"최근 수식 목록"} />
			{recentItems.length ?
				recentItems.map(({ id, latex, isBookmark }) =>
					<ListItem
						key={id}
						latex={latex}
						bookmarkOnClick={handleBookmarkButtonClick(id, isBookmark)}
						customOnClick={handleCustomButtonClick}
						deleteOnClick={handleDeleteButtonClick(id)}
						intoLatexFieldOnClick={handleFormulaClick(latex)}
						isBookmark={isBookmark}
					/>,
				) :
				<EmptyItem content={"최근 저장한 수식이 없습니다"}/>}
		</ListLayout>
	);
}

