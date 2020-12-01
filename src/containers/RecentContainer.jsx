import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteRecentItem, addBookmarkItem } from "../slice";
import ListLayout from "../layouts/ListLayout";
import ListItem from "../presentationals/ListItem";
import SideBarHeader from "../presentationals/SideBarHeader";
import EmptyItem from "../presentationals/EmptyItem";

export default function RecentContainer({ onScroll, setTabState }) {
	const { recentItems } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleBookmarkButtonClick = latex => () => {
		dispatch(addBookmarkItem(latex));
		setTabState(1);
	};

	const handleCustomButtonClick = () => {
		console.log("custom");
	};

	const handleDeleteButtonClick = index => () => {
		if (confirm("정말로 삭제하시겠습니까?")) {
			dispatch(deleteRecentItem(index));
		}
	};

	return (
		<ListLayout onScroll={onScroll}>
			<SideBarHeader title={"최근 수식 목록"} />
			{recentItems.length ?
				recentItems.map((value, index) =>
					<ListItem
						key={index}
						latex={value.latex}
						bookmarkOnClick={handleBookmarkButtonClick(value.latex)}
						customOnClick={handleCustomButtonClick}
						deleteOnClick={handleDeleteButtonClick(index)}
					/>,
				) :
				<EmptyItem content={"최근 저장한 수식이 없습니다"}/>}
		</ListLayout>
	);
}

