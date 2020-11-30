import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import LatexRepresentation from "../../src/presentationals/LatexRepresentation";

describe("<LatexRepresentation />", () => {
	it("renders latex representation", () => {
		const latexInput = "1 + 2";
		const onChange = () => {};
		const { container } = render(<LatexRepresentation latexInput={latexInput} onChange={onChange} />);

		expect(container).toHaveTextContent(latexInput);
	});
});
