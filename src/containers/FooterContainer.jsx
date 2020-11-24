import React from "react";
import FooterLayout from "../layouts/FooterLayout";
import FooterButton from "../presentationals/FooterButton";

export default function FooterContainer() {
	const handleDownloadAsImage = () => {
		console.log("clicked download image button");
	};
	const handleCopyLink = () => {
		console.log("clicked copy link button");
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
