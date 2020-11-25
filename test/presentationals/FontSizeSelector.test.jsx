import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import FontSizeSelector from "../../src/presentationals/FontSizeSelector";

describe("<FontSizeSelector />", () => {
	it("renders font size selector", () => {
		const defaultFontSize = "15";
		const ableFontSize = [11, 13, 15, 17, 19];
		const onChange = () => {};
		const { container } = render(<FontSizeSelector fontSize={defaultFontSize} onChange={onChange} />);
		const options = container.querySelectorAll("option");
		const initValue = container.querySelector("option:checked");

		expect(options).toHaveLength(ableFontSize.length);
		expect(initValue.value).toEqual(defaultFontSize);
	});
});
