import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import FooterButton from "../../src/presentationals/FooterButton";

describe("<FooterButton />", () => {
	it("renders footer button", () => {
		const name = "test";
		const onClick = () => {};
		const { container } = render(<FooterButton {...{ name, onClick }} />);

		expect(container).toHaveTextContent(name);
	});
});
