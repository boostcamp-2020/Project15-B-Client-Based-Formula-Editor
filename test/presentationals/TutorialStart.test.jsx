import React from "react";

import { render, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";

import TutorialStart from "../../src/presentationals/TutorialStart";

describe("<TutorialStart />", () => {
	const onClick = jest.fn();

	it("renders ", () => {
		const { container } = render(<TutorialStart handleSlideDown={onClick} />);
		const divs = container.querySelectorAll("div");
		const img = container.querySelector("img");
		const button = container.querySelector("button");

		fireEvent.click(button);

		expect(container).toHaveTextContent("튜토리얼 시작하기");
		expect(divs).toHaveLength(2);
		expect(img.src).toContain("/dark_logo.png");
		expect(onClick).toBeCalled();
	});
});
