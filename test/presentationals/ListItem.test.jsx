import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import ListItem from "../../src/presentationals/ListItem";

describe("<ListItem />", () => {
	describe("with bookmarkOnClick prop", () => {
		it("renders recent list item", () => {
			const latex = "2+3";
			const bookmarkOnClick = () => {};
			const customOnClick = () => {};
			const { container } = render(<ListItem { ...{ latex, bookmarkOnClick, customOnClick } }/>);
			const buttons = container.querySelectorAll("button");

			expect(container).toHaveTextContent(latex);
			expect(buttons).toHaveLength(2);
		});
	});

	describe("without bookmarkOnClick prop", () => {
		it("renders bookmark list item", () => {
			const latex = "2+3";
			const customOnClick = () => {};
			const { container } = render(<ListItem { ...{ latex, customOnClick } }/>);
			const buttons = container.querySelectorAll("button");

			expect(container).toHaveTextContent(latex);
			expect(buttons).toHaveLength(1);
		});
	});
});
