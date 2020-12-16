import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import TutorialStart from "./TutorialStart";
import TutorialPage from "./TutorialPage";

const Layout = styled.div`
  overflow: auto;
  position: fixed;
  width: 100vw;
  height: 1600vh;
  background: ${themeColor.normal};
  transform: ${(({ slide }) => `translateY(${slide}vh)`)};
  transition: 1s;
  z-index: 100;
`;

export default function TutorialMain({ slide, handleSlideUp, handleSlideDown }) {
	return (
		<Layout slide={slide}>
			<TutorialStart
				handleSlideUp={handleSlideUp}
				handleSlideDown={handleSlideDown(0)}
				handleSlideEnd={handleSlideDown(100000)}
			/>
			<TutorialPage
				imageURL="../../public/FormulaRepresentation.gif"
				title="이곳에서 원하시는 수식을 편집할 수 있습니다."
				content=""
				nextButtonName="다음"
				handleSlideUp={handleSlideUp}
				handleSlideDown={handleSlideDown(0)}
			/>
			<TutorialPage
				imageURL="../../public/FormulaRepresentation_top.gif"
				title="수식을 작성하면서 필요한 도구들을 사용할 수 있습니다."
				content=""
				nextButtonName="다음"
				handleSlideUp={handleSlideUp}
				handleSlideDown={handleSlideDown(0)}
			/>
			<TutorialPage
				imageURL="../../public/LatexRepresantation.gif"
				title="LaTeX 코드를 입력하여 수식을 만들 수 있습니다."
				content=""
				nextButtonName="다음"
				handleSlideUp={handleSlideUp}
				handleSlideDown={handleSlideDown(0)}
			/>
			<TutorialPage
				imageURL="../../public/SideBar_character.gif"
				title="수식에 필요한 기호나 연산자 등을 가져다 사용할 수 있습니다."
				content=""
				nextButtonName="다음"
				handleSlideUp={handleSlideUp}
				handleSlideDown={handleSlideDown(0)}
			/>
			<TutorialPage
				imageURL="../../public/SideTab_top.gif"
				title="임시 저장된 수식이나 북마크, 커스텀 명령어 지정을 사용 할 수 있습니다."
				content="커스텀 명령어는 $#[명령어][스페이스]$ 로 사용 가능합니다."
				nextButtonName="다음"
				handleSlideUp={handleSlideUp}
				handleSlideDown={handleSlideDown(0)}
			/>
			<TutorialPage
				imageURL="../../public/SideTab_bottom.gif"
				title="수식을 임시저장하거나 수식 링크 공유, 그리고 수식을 이미지로 저장할 수 있습니다."
				content="수식 링크 저장을 통해 다른 사람에게 공유하면, 해당 사용자가 링크를 클릭했을 때 동일한 수식을 볼 수 있습니다."
				nextButtonName="튜토리얼 완료"
				handleSlideUp={handleSlideUp}
				handleSlideDown={handleSlideDown(200)}
			/>
		</Layout>
	);
}
