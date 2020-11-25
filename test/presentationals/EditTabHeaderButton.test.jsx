import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import EditTabHeaderButton from "../../src/presentationals/EditTabHeaderButton";

describe("<EditTabHeaderButton />", () => {
	it("renders edit tab header button", () => {
		const { container } = render(<EditTabHeaderButton />);
		const button = container.querySelector("button");

		expect(button).toBeVisible();
	});
});
