import React, { useState } from "react";

import SideBarLayout from "../layouts/SideBarLayout";
import SideBarTab from "../presentationals/SideBarTab";
import RecentContainer from "./RecentContainer";
import BookmarkContainer from "./BookmarkContainer";
import CustomContainer from "./CustomContainer";

export default function SideBar() {
	const [tabState, setTabState] = useState(0);
	const [isOpenSidebar, setIsOpenSidebar] = useState("hide");
	const [isScrollTop, setIsScrollTop] = useState(true);

	const handleSidebarScroll = ({ target }) => {
		setIsScrollTop(!target.scrollTop);
	};

	const tabMap = {
		0: <RecentContainer onScroll={handleSidebarScroll}/>,
		1: <BookmarkContainer onScroll={handleSidebarScroll}/>,
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
				<SideBarTab currentTab={tabState} onClick={handleTabClick} isScrollTop={isScrollTop}/>
				{tabMap[tabState]}
			</div>
		</SideBarLayout>
	);
}
