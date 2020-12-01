import React from "react";
import { useSelector } from "react-redux";

import FooterLayout from "../layouts/FooterLayout";
import FooterButton from "../presentationals/FooterButton";

export default function FooterContainer() {
	const latexInput = useSelector(state => state.latexInput);

	const handleDownloadAsImage = () => {
		console.log("clicked download image button");
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

		alert("해당 수식의 링크가 클립보드에 복사되었습니다");
	};
	const handleSaveFormula = () => {
		console.log("clicked save temporarily formula button");
	};

	return (
		<FooterLayout>
			<FooterButton name="이미지로 다운로드" onClick={handleDownloadAsImage} />
			<FooterButton name="링크 복사" onClick={handleCopyLink} />
			<FooterButton name="수식 임시저장" onClick={handleSaveFormula} />
		</FooterLayout>
	);
}
