import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import GhostBar from "../../src/presentationals/GhostBar";

describe("<GhostBar />", () => {
	it("renders ghost bar", () => {
		const ghostHeight = 150;
		const { container } = render(<GhostBar ghostHeight={ghostHeight} />);
		const div = container.querySelector("div");

		expect(div).toBeVisible();
	});
});
