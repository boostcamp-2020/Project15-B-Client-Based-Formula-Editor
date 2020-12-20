import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import ThemeButton from "../../src/presentationals/ThemeButton";

describe("<ThemeButton />", () => {
	const theme = "dark";
	const onClick = jest.fn();

	it("renders theme button", () => {
		const { container } = render(<ThemeButton theme={theme} onClick={onClick} />);
		const divs = container.querySelectorAll("div");
		const svgs = container.querySelectorAll("svg");

		fireEvent.click(divs[0]);

		expect(divs).toHaveLength(3);
		expect(svgs).toHaveLength(2);
		expect(onClick).toBeCalled();
	});
});
