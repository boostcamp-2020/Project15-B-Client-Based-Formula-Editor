import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import SideBarTab from "../../src/presentationals/SideBarTab";

describe("<SideBarTab />", () => {
	it("renders tab menu", () => {
		const onClick = () => () => {};
		const { container } = render(<SideBarTab onClick={onClick}/>);

		expect(container).toHaveTextContent("최근");
		expect(container).toHaveTextContent("즐찾");
		expect(container).toHaveTextContent("커스텀");
	});
});