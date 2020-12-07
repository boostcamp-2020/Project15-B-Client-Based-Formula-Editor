import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeConfirmModal } from "../slice";
import { toFitSimple } from "../util";
import { RECENT_TAB, BOOKMARK_TAB, CUSTOM_COMMAND_TAB } from "../constants/sidebarTab";
import RecentContainer from "./RecentContainer";
import BookmarkContainer from "./BookmarkContainer";
import CustomContainer from "./CustomContainer";
import GreaterThanIcon from "../icons/GreaterThanIcon";
import LessThanIcon from "../icons/LessThanIcon";
import SideBarLayout from "../layouts/SideBarLayout";
import SideBarTab from "../presentationals/SideBarTab";
import IconButton from "../presentationals/IconButton";
import ConfirmModal from "../presentationals/ConfirmModal";

export default function SideBar({ mainWrapperRef }) {
	const dispatch = useDispatch();
	const confirmModal = useSelector(state => state.confirmModal);
	const [tabState, setTabState] = useState(RECENT_TAB);
	const [isScrollTop, setIsScrollTop] = useState(true);

	const handleSidebarScroll = ({ target }) => {
		setIsScrollTop(!target.scrollTop);
	};

	const tabMap = {
		[RECENT_TAB]:
			<RecentContainer
				onScroll={toFitSimple(handleSidebarScroll)}
				setTabState={setTabState}
			/>,
		[BOOKMARK_TAB]:
			<BookmarkContainer
				onScroll={toFitSimple(handleSidebarScroll)}
				setTabState={setTabState}
			/>,
		[CUSTOM_COMMAND_TAB]:
			<CustomContainer
				onScroll={toFitSimple(handleSidebarScroll)}
			/>,
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
			<SideBarLayout>
				<SideBarTab currentTab={tabState} onClick={handleTabClick} isScrollTop={isScrollTop}/>
				{tabMap[tabState]}
			</SideBarLayout>
		</>
	);
}
