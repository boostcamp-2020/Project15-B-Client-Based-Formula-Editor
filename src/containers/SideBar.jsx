import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import html2canvas from "html2canvas";

import { openBubblePopup, addRecentItem, setSidebarState, toggleIsTutorialOn } from "../slice";
import { encodeLatex } from "../util";
import popup from "../popup";
import { color } from "../GlobalStyle";
import { CLOSE_TAB, CHARACTER_TAB, RECENT_TAB, BOOKMARK_TAB, CUSTOM_COMMAND_TAB } from "../constants/sidebarTab";
import CharacterContainer from "./CharacterContainer";
import RecentContainer from "./RecentContainer";
import BookmarkContainer from "./BookmarkContainer";
import CustomContainer from "./CustomContainer";
import SideBarLayout from "../layouts/SideBarLayout";
import SideBarTabLayout from "../layouts/SideBarTabLayout";
import SideBarContentLayout from "../layouts/SideBarContentLayout";
import SideTopTab from "../presentationals/SideTopTab";
import SideBottomTab from "../presentationals/SideBottomTab";

export default function SideBar({ sidebarWidth }) {
	const dispatch = useDispatch();
	const [tabState, setTabState] = useState(CHARACTER_TAB);
	const fontInfo = useSelector(state => state.fontInfo);
	const latexInput = useSelector(state => state.latexInput);
	const sidebarState = useSelector(state => state.sidebarState);
	const { tutorial, imageDownload, linkCopy, formulaSave } = useSelector(state => state.bubblePopup);

	const tabMap = {
		[CHARACTER_TAB]: <CharacterContainer />,
		[RECENT_TAB]: <RecentContainer setTabState={setTabState} />,
		[BOOKMARK_TAB]: <BookmarkContainer setTabState={setTabState} />,
		[CUSTOM_COMMAND_TAB]: <CustomContainer />,
	};

	const handleTabClick = useCallback((tabId, isSelected) => () => {
		dispatch(setSidebarState(!isSelected));
		setTabState(isSelected ? CLOSE_TAB : tabId);
	}, []);

	const handleOpenTutorial = useCallback(async () => {
		const answer = await popup({
			mode: "confirm",
			message: "튜토리얼을 다시 보시겠습니까?",
		});

		if (!answer) return;

		dispatch(toggleIsTutorialOn(true));
	}, []);

	const handleDownloadAsImage = useCallback(async () => {
		const answer = await popup({
			mode: "image",
			message: "저장하실 파일명을 입력해주세요",
		});

		if (!answer) return;

		const { fileName, extension } = answer;

		const mathquillArea = document.querySelector(".mq-editable-field > .mq-root-block");

		mathquillArea.style.width = "max-content";
		if (fontInfo.color === "#ffffff") {
			mathquillArea.style.color = color.black;
		}

		const canvas = await html2canvas(mathquillArea);
		const virtualLink = document.createElement("a");

		virtualLink.href = canvas.toDataURL(`image/${extension}`);
		virtualLink.download = `${fileName}.${extension}`;

		document.body.appendChild(virtualLink);
		virtualLink.click();
		document.body.removeChild(virtualLink);

		mathquillArea.style.width = "100%";
		if (mathquillArea.style.color === color.black) {
			mathquillArea.style.color = color.white;
		}

		dispatch(openBubblePopup({
			target: "imageDownload",
			message: "수식을 이미지로 저장하였습니다",
		}));
	}, [fontInfo]);

	const handleCopyLink = useCallback(() => {
		const FROM_BEGINNING = 0;
		const TO_END = 99999;
		const virtualCopyTarget = document.createElement("textarea");
		const parameter = encodeLatex(latexInput);

		virtualCopyTarget.value = `${location.origin}?latex=${parameter}`;

		document.body.appendChild(virtualCopyTarget);
		virtualCopyTarget.select();
		virtualCopyTarget.setSelectionRange(FROM_BEGINNING, TO_END);
		document.execCommand("copy");
		document.body.removeChild(virtualCopyTarget);

		dispatch(openBubblePopup({
			target: "linkCopy",
			message: "수식 링크를 복사하였습니다",
		}));
	}, [latexInput]);

	const handleSaveFormula = useCallback(() => {
		if (!latexInput) return;
		dispatch(addRecentItem(latexInput));
		dispatch(openBubblePopup({
			target: "formulaSave",
			message: "수식을 저장하였습니다",
		}));
	}, [latexInput]);

	return (
		<>
			<SideBarLayout width={sidebarWidth} sidebarState={sidebarState}>
				<SideBarTabLayout>
					<SideTopTab currentTab={tabState} onClick={handleTabClick} />
					<SideBottomTab
						tutorial={tutorial}
						imageDownload={imageDownload}
						linkCopy={linkCopy}
						formulaSave={formulaSave}
						handleOpenTutorial={handleOpenTutorial}
						handleSaveFormula={handleSaveFormula}
						handleCopyLink={handleCopyLink}
						handleDownloadAsImage={handleDownloadAsImage}
					/>
				</SideBarTabLayout>
				{sidebarState &&
					<SideBarContentLayout>
						{tabMap[tabState]}
					</SideBarContentLayout>
				}
			</SideBarLayout>
		</>
	);
}
