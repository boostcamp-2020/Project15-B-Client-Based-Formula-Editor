import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import FontSizeSelector from "../../src/presentationals/FontSizeSelector";
import { fontSizes } from "../../src/constants/fontConfig";

describe("<FontSizeSelector />", () => {
	it("renders font size selector", () => {
		const defaultFontSize = "20";
		const { container } = render(
			<FontSizeSelector
				fontSizeRef={null}
				fontSize={defaultFontSize}
				isFontSizeFocused={true}
				handleFontSizeChange={() => {}}
				handleFontSizeItemClick={() => {}}
				handleFontSizeInputClick={() => {}}
			/>);

		const input = container.querySelector("input");

		expect(input.value).toBe(defaultFontSize);
		fontSizes.forEach(size => {
			expect(container).toHaveTextContent(size);
		});
	});
});
