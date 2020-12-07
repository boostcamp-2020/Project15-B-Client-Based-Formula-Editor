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
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);
	const [isScrollTop, setIsScrollTop] = useState(true);

	const handleSidebarScroll = ({ target }) => {
		setIsScrollTop(!target.scrollTop);
	};

	const tabMap = {
		[RECENT_TAB]:
			<RecentContainer
				onScroll={toFitSimple(handleSidebarScroll)}
				setSidebar={setIsOpenSidebar}
				setTabState={setTabState}
			/>,
		[BOOKMARK_TAB]:
			<BookmarkContainer
				onScroll={toFitSimple(handleSidebarScroll)}
				setSidebar={setIsOpenSidebar}
				setTabState={setTabState}
			/>,
		[CUSTOM_COMMAND_TAB]:
			<CustomContainer
				onScroll={toFitSimple(handleSidebarScroll)}
			/>,
	};

	const handleToggleSidebar = () => {
		setIsOpenSidebar(!isOpenSidebar);
	};

	const handleTabClick = tabId => () => {
		setTabState(tabId);
	};

	useEffect(() => {
		const outsideClickEvent = ({ target }) => {
			const isOutsideClick = mainWrapperRef.current.contains(target);

			if (isOutsideClick) {
				setIsOpenSidebar(false);
			}
		};

		window.addEventListener("click", outsideClickEvent);
		return () => window.removeEventListener("click", outsideClickEvent);
	}, []);

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
			<SideBarLayout isOpenSidebar={isOpenSidebar}>
				<IconButton
					onClick={handleToggleSidebar}
					icon={<LessThanIcon />}
				/>
				<IconButton
					onClick={handleToggleSidebar}
					icon={<GreaterThanIcon />}
				/>
				<div>
					<SideBarTab currentTab={tabState} onClick={handleTabClick} isScrollTop={isScrollTop}/>
					{tabMap[tabState]}
				</div>
			</SideBarLayout>
		</>
	);
}
