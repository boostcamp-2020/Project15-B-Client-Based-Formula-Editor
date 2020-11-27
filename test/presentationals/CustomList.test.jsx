import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import CustomList from "../../src/presentationals/CustomList";

describe("<CustomList />", () => {
	it("renders custom list items", () => {
		const customs = [{ id: 0, name: "\\aaa" }, { id: 1, name: "\\bbb" }, { id: 2, name: "\\ccc" }];
		const { container } = render(<CustomList customs={customs} />);
		const buttons = container.querySelectorAll("button");

		expect(container).toHaveTextContent("내 코드들");
		expect(container).toHaveTextContent("\\aaa");
		expect(container).toHaveTextContent("\\bbb");
		expect(container).toHaveTextContent("\\ccc");
		expect(buttons).toHaveLength(customs.length * 2);
	});
});
