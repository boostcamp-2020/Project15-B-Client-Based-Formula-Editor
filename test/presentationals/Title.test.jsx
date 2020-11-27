import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Title from "../../src/presentationals/Title";

describe("<Title />", () => {
	it("renders title", () => {
		const { container } = render(<Title />);

		expect(container).toHaveTextContent("FEditor");
	});
});
