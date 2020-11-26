import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import FontColorSelector from "../../src/presentationals/FontColorSelector";

describe("<FontColorSelector />", () => {
	it("renders font color selector", () => {
		const { container } = render(<FontColorSelector />);
		const colorSelector = container.querySelector("input[type=color]");

		expect(colorSelector).toBeVisible();
	});
});
