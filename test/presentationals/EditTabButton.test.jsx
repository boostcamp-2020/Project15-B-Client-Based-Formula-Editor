import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import EditTabButton from "../../src/presentationals/EditTabButton";

describe("<EditTabButton />", () => {
	it("renders edit tab button", () => {
		const { container } = render(<EditTabButton />);

		expect(container).toHaveTextContent("수식 편집 창");
	});
});
