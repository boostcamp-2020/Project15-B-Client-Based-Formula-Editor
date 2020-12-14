import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import CustomItem from "../../src/presentationals/CustomItem";

describe("<CustomItem />", () => {
	it("renders custom item", () => {
		const { container } = render(
			<CustomItem
				name="a+b"
				onClickEdit={() => {}}
				onClickDelete={() => {}}
			/>,
		);
		const buttons = container.querySelectorAll("button");

		expect(container).toHaveTextContent("a+b");
		expect(buttons).toHaveLength(2);
	});
});
