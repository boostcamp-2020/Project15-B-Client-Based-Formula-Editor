import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import DynamicBarVertical from "../../src/presentationals/DynamicBarVertical";

describe("<DynamicBarVertical />", () => {
	it("renders horizontal dynamic bar", () => {
		const { container } = render(
			<DynamicBarVertical
				onMouseDown={() => {}}
				top={30}
			/>,
		);

		expect(container).toBeVisible();
	});
});
