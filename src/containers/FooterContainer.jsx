import React from "react";
import { useSelector, useDispatch } from "react-redux";
import html2canvas from "html2canvas";

import { openBubblePopup, addRecentItem } from "../slice";
import { encodeLatex } from "../util";
import FooterLayout from "../layouts/FooterLayout";
import FooterButton from "../presentationals/FooterButton";

export default function FooterContainer() {
	const dispatch = useDispatch();
	const latexInput = useSelector(state => state.latexInput);
	const { imageDownload, linkCopy, formulaSave } = useSelector(state => state.bubblePopup);

	const handleDownloadAsImage = async () => {
		const mathquillArea = document.querySelector(".mq-editable-field > .mq-root-block");

		mathquillArea.style.width = "max-content";

		const canvas = await html2canvas(mathquillArea);

		const virtualLink = document.createElement("a");

		virtualLink.href = canvas.toDataURL("image/png");
		virtualLink.download = "feditor_formula.png";

		document.body.appendChild(virtualLink);
		virtualLink.click();
		document.body.removeChild(virtualLink);

		mathquillArea.style.width = "100%";

		dispatch(openBubblePopup({
			target: "imageDownload",
			message: "수식을 이미지로 저장하였습니다",
		}));
	};

	const handleCopyLink = () => {
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
	};

	const handleSaveFormula = () => {
		if (!latexInput) return;
		dispatch(addRecentItem(latexInput));
		dispatch(openBubblePopup({
			target: "formulaSave",
			message: "수식을 저장하였습니다",
		}));
	};

	return (
		<FooterLayout>
			<FooterButton
				name="이미지로 다운로드"
				onClick={handleDownloadAsImage}
				isOpen={imageDownload.isOpen}
				message={imageDownload.message}
			/>
			<FooterButton
				name="링크 복사"
				onClick={handleCopyLink}
				isOpen={linkCopy.isOpen}
				message={linkCopy.message}
			/>
			<FooterButton
				name="수식 저장"
				onClick={handleSaveFormula}
				isOpen={formulaSave.isOpen}
				message={formulaSave.message}
			/>
		</FooterLayout>
	);
}
