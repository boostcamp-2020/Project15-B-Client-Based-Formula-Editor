import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import FormulaRepresentation from "../../src/presentationals/FormulaRepresentation";

describe("<FormulaRepresentation />", () => {
	it("renders formula representation", () => {
		const { container } = render(<FormulaRepresentation />);
		const div = container.querySelector("div");

		expect(div).toBeVisible();
	});
});
