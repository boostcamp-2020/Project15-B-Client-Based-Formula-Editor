import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeConfirmModal, closePromptModal } from "../slice";
import { CHARACTER_TAB, RECENT_TAB, BOOKMARK_TAB, CUSTOM_COMMAND_TAB } from "../constants/sidebarTab";
import CharacterContainer from "./CharacterContainer";
import RecentContainer from "./RecentContainer";
import BookmarkContainer from "./BookmarkContainer";
import CustomContainer from "./CustomContainer";
import SideBarLayout from "../layouts/SideBarLayout";
import SideBarContentLayout from "../layouts/SideBarContentLayout";
import SideBarTab from "../presentationals/SideBarTab";
import ConfirmModal from "../presentationals/ConfirmModal";
import PromptModal from "../presentationals/PromptModal";

export default function SideBar({ sidebarWidth }) {
	const dispatch = useDispatch();
	const confirmModal = useSelector(state => state.confirmModal);
	const promptModal = useSelector(state => state.promptModal);
	const [tabState, setTabState] = useState(CHARACTER_TAB);
	const [promptInput, setPromptInput] = useState("");

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

	const handlePromptClick = result => () => {
		dispatch(closePromptModal(result));
		setPromptInput("");
	};

	const handlePromptChange = e => {
		setPromptInput(e.target.value);
	};

	return (
		<>
			<PromptModal
				isOpen={promptModal.isOpen}
				message={promptModal.message}
				inputValue={promptInput}
				onChange={handlePromptChange}
				onClickYes={handlePromptClick(promptInput)}
				onClickNo={handlePromptClick(false)}
			/>
			<ConfirmModal
				isOpen={confirmModal.isOpen}
				message={confirmModal.message}
				onClickYes={handleConfirmClick(true)}
				onClickNo={handleConfirmClick(false)}
			/>
			<SideBarLayout width={sidebarWidth}>
				<SideBarTab currentTab={tabState} onClick={handleTabClick} />
				<SideBarContentLayout>
					{tabMap[tabState]}
				</SideBarContentLayout>
			</SideBarLayout>
		</>
	);
}
