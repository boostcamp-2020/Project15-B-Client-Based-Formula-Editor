import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import DropdownItem from "../../src/presentationals/DropdownItem";

describe("<DropdownItem />", () => {
	it("renders drop down item", () => {
		const item = { name: "수식" };
		const onClick = () => {};
		const { container } = render(<DropdownItem {...{ item, onClick }} />);

		expect(container).toHaveTextContent("수식");
	});
});
