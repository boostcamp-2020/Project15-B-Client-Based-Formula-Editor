import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import FormulaButton from "../../src/presentationals/FormulaButton";

describe("<FormulaButton />", () => {
	it("renders formula button", () => {
		const name = "test";
		const onClick = () => {};
		const { container } = render(<FormulaButton {...{ name, onClick }}/>);

		expect(container).toHaveTextContent(name);
	});
});
