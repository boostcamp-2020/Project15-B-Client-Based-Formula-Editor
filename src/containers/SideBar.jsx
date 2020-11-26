import React, { useState } from "react";

import SideBarLayout from "../layouts/SideBarLayout";
import SideBarTab from "../presentationals/SideBarTab";
import IconButton from "../presentationals/IconButton";
import RecentContainer from "./RecentContainer";
import BookmarkContainer from "./BookmarkContainer";
import CustomContainer from "./CustomContainer";
import GreaterThanIcon from "../icons/GreaterThanIcon";
import LessThanIcon from "../icons/LessThanIcon";
import { toFitSimple } from "../util";

export default function SideBar() {
	const [tabState, setTabState] = useState(0);
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);
	const [isScrollTop, setIsScrollTop] = useState(true);

	const handleSidebarScroll = ({ target }) => {
		setIsScrollTop(!target.scrollTop);
	};

	const tabMap = {
		0: <RecentContainer onScroll={toFitSimple(handleSidebarScroll)}/>,
		1: <BookmarkContainer onScroll={toFitSimple(handleSidebarScroll)}/>,
		2: <CustomContainer />,
	};

	const handleToggleSidebar = () => {
		isOpenSidebar ? setIsOpenSidebar(false) : setIsOpenSidebar(true);
	};

	const handleTabClick = tabId => () => {
		setTabState(tabId);
	};

	return (
		<SideBarLayout className={isOpenSidebar ? "show" : "hide"}>
			{/* <div> */}
			<IconButton
				onClick={handleToggleSidebar}
				icon={isOpenSidebar ? <GreaterThanIcon /> : <LessThanIcon />}
			/>
			{/* </div> */}
			{/* <button onClick={handleToggleSidebar}>{isOpenSidebar === "hide" ? "<" : ">"}</button> */}
			<div>
				<SideBarTab currentTab={tabState} onClick={handleTabClick} isScrollTop={isScrollTop}/>
				{tabMap[tabState]}
			</div>
		</SideBarLayout>
	);
}
