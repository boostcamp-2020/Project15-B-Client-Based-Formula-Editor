import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import CustomItem from "../../src/presentationals/CustomItem";

describe("<CustomItem />", () => {
	it("renders custom item", () => {
		const { container } = render(<CustomItem name={"\\cmx"}/>);
		const buttons = container.querySelectorAll("button");

		expect(container).toHaveTextContent("\\cmx");
		expect(buttons).toHaveLength(2);
	});
});
