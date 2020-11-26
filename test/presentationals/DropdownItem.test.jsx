import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import DropdownItem from "../../src/presentationals/DropdownItem";

describe("<DropdownItem />", () => {
	it("renders drop down item", () => {
		const value = "수식";
		const onClick = () => {};
		const { container } = render(<DropdownItem {...{ value, onClick }} />);

		expect(container).toHaveTextContent(value);
	});
});
