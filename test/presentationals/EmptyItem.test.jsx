import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import EmptyItem from "../../src/presentationals/EmptyItem";

describe("<EmptyItem />", () => {
	it("renders empty item", () => {
		const test = "Test";
		const { container } = render(<EmptyItem content={test}/>);
		const svg = container.querySelector("svg");

		expect(container).toHaveTextContent(test);
		expect(svg).toBeVisible();
	});
});
