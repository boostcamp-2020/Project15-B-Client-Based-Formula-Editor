import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import FontSizeSelector from "../../src/presentationals/FontSizeSelector";

describe("<FontSizeSelector />", () => {
	it("renders font size selector", () => {
		const defaultFontSize = "20";
		const ableFontSize = [11, 12, 13, 14, 15, 16, 17, 18, 19];
		const onChange = () => {};
		const { container } = render(<FontSizeSelector fontSize={defaultFontSize} onChange={onChange} />);
		const options = container.querySelectorAll("option");
		const initialValue = container.querySelector("option:checked");

		expect(options).toHaveLength(ableFontSize.length);
		expect(initialValue.value).toEqual(defaultFontSize);
	});
});
