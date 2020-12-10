import React, { useState } from "react";

import { CHARACTER_TAB, RECENT_TAB, BOOKMARK_TAB, CUSTOM_COMMAND_TAB } from "../constants/sidebarTab";
import CharacterContainer from "./CharacterContainer";
import RecentContainer from "./RecentContainer";
import BookmarkContainer from "./BookmarkContainer";
import CustomContainer from "./CustomContainer";
import SideBarLayout from "../layouts/SideBarLayout";
import SideBarContentLayout from "../layouts/SideBarContentLayout";
import SideBarTab from "../presentationals/SideBarTab";

export default function SideBar({ sidebarWidth }) {
	const [tabState, setTabState] = useState(CHARACTER_TAB);

	const tabMap = {
		[CHARACTER_TAB]: <CharacterContainer />,
		[RECENT_TAB]: <RecentContainer setTabState={setTabState} />,
		[BOOKMARK_TAB]: <BookmarkContainer setTabState={setTabState} />,
		[CUSTOM_COMMAND_TAB]: <CustomContainer />,
	};

	const handleTabClick = tabId => () => {
		setTabState(tabId);
	};

	return (
		<>
			<SideBarLayout width={sidebarWidth}>
				<SideBarTab currentTab={tabState} onClick={handleTabClick} />
				<SideBarContentLayout>
					{tabMap[tabState]}
				</SideBarContentLayout>
			</SideBarLayout>
		</>
	);
}
