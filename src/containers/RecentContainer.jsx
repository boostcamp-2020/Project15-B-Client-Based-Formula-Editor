import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteRecentItem } from "../slice";
import ListLayout from "../layouts/ListLayout";
import ListItem from "../presentationals/ListItem";
import SideBarHeader from "../presentationals/SideBarHeader";
import EmptyItem from "../presentationals/EmptyItem";

export default function RecentContainer({ onScroll }) {
	// const items = [{ id: 0, latex: "2 + 3" }, { id: 1, latex: "4 + 5" }, { id: 2, latex: "6 + 7" }, { id: 3, latex: "6 + 7" }, { id: 4, latex: "6 + 7" }];

	const { recentItems } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleBookmarkButtonClick = () => {
		console.log("bookmark");
	};

	const handleCustomButtonClick = () => {
		console.log("custom");
	};

	const handleDeleteButtonClick = id => () => {
		if (confirm("정말로 삭제하시겠습니까?")) {
			dispatch(deleteRecentItem(id));
		}
	};

	return (
		<ListLayout onScroll={onScroll}>
			<SideBarHeader title={"최근 수식 목록"} />
			{recentItems.length ?
				recentItems.map(({ id, latex }) =>
					<ListItem
						key={id}
						latex={latex}
						bookmarkOnClick={handleBookmarkButtonClick}
						customOnClick={handleCustomButtonClick}
						deleteOnClick={handleDeleteButtonClick(id)}
					/>,
				) :
				<EmptyItem content={"최근 저장한 수식이 없습니다"}/>}
		</ListLayout>
	);
}

