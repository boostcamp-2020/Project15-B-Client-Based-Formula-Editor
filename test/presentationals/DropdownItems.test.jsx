import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import DropdownItems from "../../src/presentationals/DropdownItems";

describe("<DropdownItems />", () => {
	it("renders dropdown items", () => {
		const name = "연산자";
		const onItemClick = () => {};
		const { container } = render(
			<DropdownItems
				name={name}
				onItemClick={onItemClick}
			/>,
		);

		expect(container).toHaveTextContent("+");
		expect(container).toHaveTextContent("-");
	});
});
