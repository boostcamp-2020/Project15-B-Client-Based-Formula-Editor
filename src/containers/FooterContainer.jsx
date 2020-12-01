import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { openBubblePopup } from "../slice";
import FooterLayout from "../layouts/FooterLayout";
import FooterButton from "../presentationals/FooterButton";

export default function FooterContainer() {
	const dispatch = useDispatch();
	const latexInput = useSelector(state => state.latexInput);
	const { imageDownload, linkCopy, formulaSave } = useSelector(state => state.bubblePopup);

	const handleDownloadAsImage = () => {
		dispatch(openBubblePopup({ target: "imageDownload", isOpen: true }));
	};
	const handleCopyLink = () => {
		const FROM_BEGINNING = 0;
		const TO_END = 99999;

		const temptCopyTarget = document.createElement("textarea");

		const parameter = latexInput.replace(/\\/g, "$$$");

		temptCopyTarget.value = `${location.origin}/${parameter}`;

		document.body.appendChild(temptCopyTarget);
		temptCopyTarget.select();
		temptCopyTarget.setSelectionRange(FROM_BEGINNING, TO_END);
		document.execCommand("copy");
		document.body.removeChild(temptCopyTarget);

		dispatch(openBubblePopup({ target: "linkCopy", isOpen: true }));
	};
	const handleSaveFormula = () => {
		dispatch(openBubblePopup({ target: "formulaSave", isOpen: true }));
	};

	return (
		<FooterLayout>
			<FooterButton name="이미지로 다운로드" onClick={handleDownloadAsImage} />
			<FooterButton name="링크 복사" onClick={handleCopyLink} />
			<FooterButton name="수식 임시저장" onClick={handleSaveFormula} />
		</FooterLayout>
	);
}
