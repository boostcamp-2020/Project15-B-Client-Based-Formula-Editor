import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import SideBarHeader from "../../src/presentationals/SideBarHeader";

describe("<SideBarHeader />", () => {
	it("renders side bar header", () => {
		const title = "test";
		const { container } = render(<SideBarHeader title={title}/>);

		expect(container).toHaveTextContent(title);
	});
});
