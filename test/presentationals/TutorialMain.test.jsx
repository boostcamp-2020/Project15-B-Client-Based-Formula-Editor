import React from "react";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import TutorialMain from "../../src/presentationals/TutorialMain";

describe("<TutorialMain />", () => {
	it("renders all tutorial slides", () => {
		const initialSlideValue = 1000;
		const { container } = render(<TutorialMain
			slide={initialSlideValue}
			handleSlideUp={() => {}}
			handleSlideDown={() => {}}
			handleSlideEnd={() => {}}
		/>);

		const divs = container.querySelectorAll("div");
		const imgs = container.querySelectorAll("img");

		expect(container).toHaveTextContent("튜토리얼 시작하기");
		expect(container).toHaveTextContent("이곳에서 원하시는 수식을 편집할 수 있습니다.");
		expect(divs.length).toBe(39);
		expect(imgs.length).toBe(7);
	});
});
