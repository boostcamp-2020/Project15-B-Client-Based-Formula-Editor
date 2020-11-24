import React, { useState } from "react";

import SideBarTab from "../presentationals/SideBarTab";
import RecentContainer from "./RecentContainer";
import BookmarkContainer from "./BookmarkContainer";
import CustomContainer from "./CustomContainer";

export default function SideBar() {
	const [tabState, setTabState] = useState(0);

	const tabMap = {
		0: <RecentContainer />,
		1: <BookmarkContainer />,
		2: <CustomContainer />,
	};

	const handleTabClick = tabId => () => {
		setTabState(tabId);
	};

	return (
		<div>
			<SideBarTab currentTab={tabState} onClick={handleTabClick}/>
			{tabMap[tabState]}
		</div>
	);
}
