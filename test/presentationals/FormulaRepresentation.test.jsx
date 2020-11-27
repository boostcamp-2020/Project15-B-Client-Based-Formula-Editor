import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import FormulaRepresentation from "../../src/presentationals/FormulaRepresentation";

describe("<FormulaRepresentation />", () => {
	it("renders formula representation", () => {
		const latexInput = "1+2";
		const handleLatexInput = () => {};
		const mathquillDidMount = () => {};
		const fontInfo = { size: "16px", color: "black" };
		const alignInfo = "left";
		const { container } = render(
			<FormulaRepresentation
				latexInput={latexInput}
				handleLatexInput={handleLatexInput}
				mathquillDidMount={mathquillDidMount}
				fontInfo={fontInfo}
				alignInfo={alignInfo}
			/>);

		expect(container).toHaveTextContent("1+2");
	});
});
