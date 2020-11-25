import React, { useState } from "react";

import SideBarLayout from "../layouts/SideBarLayout";
import SideBarTab from "../presentationals/SideBarTab";
import RecentContainer from "./RecentContainer";
import BookmarkContainer from "./BookmarkContainer";
import CustomContainer from "./CustomContainer";

export default function SideBar() {
	const [tabState, setTabState] = useState(0);
	const [isOpenSidebar, setIsOpenSidebar] = useState("hide");

	const tabMap = {
		0: <RecentContainer />,
		1: <BookmarkContainer />,
		2: <CustomContainer />,
	};

	const handleToggleSidebar = () => {
		isOpenSidebar === "hide" ? setIsOpenSidebar("show") : setIsOpenSidebar("hide");
	};

	const handleTabClick = tabId => () => {
		setTabState(tabId);
	};

	return (
		<SideBarLayout className={isOpenSidebar}>
			<button onClick={handleToggleSidebar}>{isOpenSidebar === "hide" ? "<" : ">"}</button>
			<div>
				<SideBarTab currentTab={tabState} onClick={handleTabClick} />
				{tabMap[tabState]}
			</div>
		</SideBarLayout>
	);
}
