import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeConfirmModal } from "../slice";
import { toFitSimple } from "../util";
import { CHARACTER_TAB, RECENT_TAB, BOOKMARK_TAB, CUSTOM_COMMAND_TAB } from "../constants/sidebarTab";
import CharacterContainer from "./CharacterContainer";
import RecentContainer from "./RecentContainer";
import BookmarkContainer from "./BookmarkContainer";
import CustomContainer from "./CustomContainer";
import SideBarLayout from "../layouts/SideBarLayout";
import SideBarTab from "../presentationals/SideBarTab";
import ConfirmModal from "../presentationals/ConfirmModal";

export default function SideBar() {
	const dispatch = useDispatch();
	const confirmModal = useSelector(state => state.confirmModal);
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

	const handleConfirmClick = result => () => {
		dispatch(closeConfirmModal(result));
	};

	return (
		<>
			<ConfirmModal
				isOpen={confirmModal.isOpen}
				message={confirmModal.message}
				onClickYes={handleConfirmClick(true)}
				onClickNo={handleConfirmClick(false)}
			/>
			<SideBarTab currentTab={tabState} onClick={handleTabClick} />
			<SideBarLayout>
				{tabMap[tabState]}
			</SideBarLayout>
		</>
	);
}
