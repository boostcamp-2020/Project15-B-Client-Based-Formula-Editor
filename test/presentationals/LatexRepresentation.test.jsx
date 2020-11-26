import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import LatexRepresentation from "../../src/presentationals/LatexRepresentation";

describe("<LatexRepresentation />", () => {
	it("renders latex representation", () => {
		const { container } = render(<LatexRepresentation />);
		const div = container.querySelector("textarea");

		expect(div).toBeVisible();
	});
});
