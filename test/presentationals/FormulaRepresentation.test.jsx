import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import FormulaRepresentation from "../../src/presentationals/FormulaRepresentation";

describe("<FormulaRepresentation />", () => {
	const onChange = jest.fn();
	const latexFunction = {
		insertLatex: () => { },
	};
	const mathquillDidMount = mathField => {
		latexFunction.insertLatex = latex => {
			mathField.write(latex);
		};
	};

	it("renders formula representation", () => {
		const latexInput = "1+2";
		const fontInfo = { size: "16px", color: "black" };
		const alignInfo = "left";
		const height = 150;
		const { container } = render(
			<FormulaRepresentation
				latexInput={latexInput}
				onChange={onChange}
				mathquillDidMount={mathquillDidMount}
				fontInfo={fontInfo}
				alignInfo={alignInfo}
				height={height}
			/>);

		const EditableMathField = container.querySelector(".mq-math-mode");

		latexFunction.insertLatex("hi");

		expect(container).toHaveTextContent(latexInput);
		expect(EditableMathField).toBeVisible();
		expect(onChange).toBeCalled();
	});
});
