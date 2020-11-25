import React from "react";

import ListLayout from "../layouts/ListLayout";
import ListItem from "../presentationals/ListItem";
import SideBarHeader from "../presentationals/SideBarHeader";

export default function RecentContainer() {
	const recentItems = [{ id: 0, latex: "2 + 3" }, { id: 1, latex: "4 + 5" }, { id: 2, latex: "6 + 7" }];

	const handleBookmarkButtonClick = () => {
		console.log("bookmark");
	};

	const handleCustomButtonClick = () => {
		console.log("custom");
	};

	return (
		<ListLayout>
			<SideBarHeader title={"최근 수식 목록"} />
			{recentItems.map(({ id, latex }) =>
				<ListItem
					key={id}
					latex={latex}
					bookmarkOnClick={handleBookmarkButtonClick}
					customOnClick={handleCustomButtonClick}
				/>,
			)}
		</ListLayout>
	);
}

