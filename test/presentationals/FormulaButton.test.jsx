import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import FormulaButton from "../../src/presentationals/FormulaButton";

describe("<FormulaButton />", () => {
	it("renders formula button", () => {
		const children = "component";
		const isSelected = false;
		const onClick = () => {};
		const { container } = render(
			<FormulaButton
				onClick={onClick}
				isSelected={isSelected}
			>
				{children}
			</FormulaButton>,
		);

		expect(container).toHaveTextContent(children);
	});
});
