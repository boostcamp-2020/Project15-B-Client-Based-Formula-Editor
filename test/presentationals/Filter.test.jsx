import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Filter from "../../src/presentationals/Filter";

describe("<Filter />", () => {
	it("renders search filter", () => {
		const onChange = () => {};
		const { container } = render(<Filter onChange={onChange} />);
		const input = container.querySelector("input");

		expect(container).toBeDefined();
		expect(input).toBeVisible();
		expect(input.placeholder).toEqual("Search");
	});
});
