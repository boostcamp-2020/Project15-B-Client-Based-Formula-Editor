import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import FontColorSelector from "../../src/presentationals/FontColorSelector";
import { colorChart } from "../../src/constants/fontConfig";

describe("<FontColorSelector />", () => {
	it("renders font color buttons", () => {
		const { getByTestId } = render(
			<FontColorSelector
				fontColorRef={null}
				fontColor="#ffffff"
				fontDropdown={{ color: true }}
				onChange={() => {}}
				onClickItem={() => {}}
				onClickButton={() => {}}
			/>,
		);

		const colors = colorChart.flat();

		colors.forEach(color => {
			expect(getByTestId(color)).toBeVisible();
		});
	});
});
