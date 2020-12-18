import React from "react";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import TutorialPage from "../../src/presentationals/TutorialPage";

describe("<TutorialPage />", () => {
	it("renders ", () => {
		const testImageURL = "../../public/..";
		const testTitle = "튜토리얼 페이지 타이틀 렌더링";
		const testContent = "튜토리얼 페이지 내용 렌더링";

		const { container } = render(
			<TutorialPage
				imageURL={testImageURL}
				title={testTitle}
				content={testContent}
				handleSlideUp={() => {}}
				handleSlideDown={() => {}}
			/>,
		);

		expect(container).toHaveTextContent(testTitle);
		expect(container).toHaveTextContent(testContent);
	});
});
