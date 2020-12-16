import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import FormulaRepresentation from "../../src/presentationals/FormulaRepresentation";

describe("<FormulaRepresentation />", () => {
	it("renders formula representation", () => {
		const latexInput = "1+2";
		const onEvent = () => {};
		const fontInfo = { size: "16px", color: "black" };
		const alignInfo = "left";
		const height = 150;
		const { container } = render(
			<FormulaRepresentation
				latexInput={latexInput}
				onChange={onEvent}
				mathquillDidMount={onEvent}
				fontInfo={fontInfo}
				alignInfo={alignInfo}
				height={height}
			/>);

		const EditableMathField = container.querySelector(".mq-math-mode");

		expect(container).toHaveTextContent(latexInput);
		expect(EditableMathField).toBeVisible();
	});
});
