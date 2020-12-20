import React from "react";
import styled from "styled-components";

import color from "../constants/color";
import TutorialStart from "./TutorialStart";
import TutorialPage from "./TutorialPage";

const Layout = styled.div`
	display: flex;
  position: fixed;
  width: ${(({ browserWidth }) => browserWidth * 7)}px;
  height: 100vh;
	background: ${({ theme }) => color.mainTheme3[theme]};
  transform: ${(({ slide }) => `translateX(${slide}px)`)};
  transition: 1s;
  z-index: 100;
`;

export default function TutorialMain({
	browserWidth,
	slide,
	handleSlideUp,
	handleSlideDown,
	handleSlideEnd,
	theme,
}) {
	const pages = [
		{
			imageURL: "FormulaRepresentation.gif",
			title: "이곳에서 원하시는 수식을 편집할 수 있습니다.",
		},
		{
			imageURL: "FormulaRepresentation_top.gif",
			title: "수식을 작성하면서 필요한 도구들을 사용할 수 있습니다.",
		},
		{
			imageURL: "LatexRepresantation.gif",
			title: "LaTeX 코드를 입력하여 수식을 만들 수 있습니다.",
		},
		{
			imageURL: "SideBar_character.gif",
			title: "수식에 필요한 기호나 연산자 등을 가져다 사용할 수 있습니다.",
		},
		{
			imageURL: "SideTab_top.gif",
			title: "임시 저장된 수식이나 북마크, 커스텀 명령어 지정을 사용 할 수 있습니다.",
			content: "커스텀 명령어는 LaTeX 명령어와 같은 방식으로 사용할 수 있습니다.",
		},
		{
			imageURL: "SideTab_bottom.gif",
			title: "수식을 임시저장하거나 수식 링크 공유, 그리고 수식을 이미지로 저장할 수 있습니다.",
			content: "수식 링크 저장을 통해 다른 사람에게 공유하면, 해당 사용자가 링크를 클릭했을 때 동일한 수식을 볼 수 있습니다.",
			end: true,
		},
	];

	return (
		<Layout slide={slide} browserWidth={browserWidth} theme={theme}>
			<TutorialStart
				browserWidth={browserWidth}
				handleSlideDown={handleSlideDown}
				theme={theme}
			/>
			{pages.map((page, index) =>
				<TutorialPage
					key={index}
					imageURL={page.imageURL}
					title={page.title}
					content={page.content}
					browserWidth={browserWidth}
					handleSlideUp={handleSlideUp}
					handleSlideDown={page.end ? handleSlideEnd : handleSlideDown}
					end={page.end}
					theme={theme}
				/>)}
		</Layout>
	);
}
