import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import DynamicBarHorizontal from "../../src/presentationals/DynamicBarHorizontal";

describe("<DynamicBarHorizontal />", () => {
	it("renders horizontal dynamic bar", () => {
		const { container } = render(
			<DynamicBarHorizontal
				isMove={true}
				onMouseDown={() => {}}
				divLeft={30}
			/>,
		);

		expect(container).toBeVisible();
	});
});
