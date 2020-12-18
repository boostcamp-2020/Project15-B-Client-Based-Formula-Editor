import React from "react";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import TutorialStart from "../../src/presentationals/TutorialStart";

describe("<TutorialStart />", () => {
	it("renders ", () => {
		const { container } = render(
			<TutorialStart
				handleSlideDown={() => {}}
				handleSlideEnd={() => {}}
			/>,
		);

		expect(container).toHaveTextContent("튜토리얼 시작하기");
		expect(container).toHaveTextContent("Skip");
	});
});
