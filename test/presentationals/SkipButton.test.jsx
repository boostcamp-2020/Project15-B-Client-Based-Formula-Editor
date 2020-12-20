import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import SkipButton from "../../src/presentationals/SkipButton";

describe("<SkipButton />", () => {
	const onClick = jest.fn();

	it("renders skip button", () => {
		const { container } = render(<SkipButton handleSlideEnd={onClick} />);
		const div = container.querySelector("div");

		fireEvent.click(div);

		expect(onClick).toBeCalled();
		expect(div).toHaveTextContent("Skip >");
	});
});
