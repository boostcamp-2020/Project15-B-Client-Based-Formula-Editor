import React from "react";
import { useSelector, useDispatch } from "react-redux";
import html2canvas from "html2canvas";

import { openBubblePopup } from "../slice";
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
			isOpen: true,
			message: "수식을 이미지로 저장하였습니다",
		}));
	};

	const handleCopyLink = () => {
		const FROM_BEGINNING = 0;
		const TO_END = 99999;

		const virtualCopyTarget = document.createElement("textarea");

		const parameter = latexInput.replace(/\\/g, "$$$");

		virtualCopyTarget.value = `${location.origin}/${parameter}`;

		document.body.appendChild(virtualCopyTarget);
		virtualCopyTarget.select();
		virtualCopyTarget.setSelectionRange(FROM_BEGINNING, TO_END);
		document.execCommand("copy");
		document.body.removeChild(virtualCopyTarget);

		dispatch(openBubblePopup({
			target: "linkCopy",
			isOpen: true,
			message: "수식 링크를 복사하였습니다",
		}));
	};

	const handleSaveFormula = () => {
		// store로부터 상태를 불러와야 함.
		const previousValue = ["a", "b", "c"];

		localStorage.setItem("recentItems", JSON.stringify([latexInput, ...previousValue]));

		// recentItems의 상태를 변경하는 dispatch 로직이 들어가야 함.
		dispatch(openBubblePopup({
			target: "formulaSave",
			isOpen: true,
			message: "수식을 저장하였습니다",
		}));
	};

	return (
		<FooterLayout>
			<FooterButton
				name="이미지로 다운로드"
				onClick={handleDownloadAsImage}
				isPopupOn={imageDownload.isOpen}
				message={imageDownload.message}
			/>
			<FooterButton
				name="링크 복사"
				onClick={handleCopyLink}
				isPopupOn={linkCopy.isOpen}
				message={linkCopy.message}
			/>
			<FooterButton
				name="수식 저장"
				onClick={handleSaveFormula}
				isPopupOn={formulaSave.isOpen}
				message={formulaSave.message}
			/>
		</FooterLayout>
	);
}
