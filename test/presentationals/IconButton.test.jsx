import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import IconButton from "../../src/presentationals/IconButton";

describe("<IconButton />", () => {
	it("renders icon button", () => {
		const icon = "test";
		const { container } = render(<IconButton icon={icon} />);

		expect(container).toHaveTextContent(icon);
	});
});
