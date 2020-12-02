import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import ListItem from "../../src/presentationals/ListItem";

describe("<ListItem />", () => {
	describe("with bookmarkOnClick prop", () => {
		it("renders recent list item", () => {
			const prop = {
				latex: "2+3",
				bookmarkOnClick: () => {},
				customOnClick: () => {},
				deleteOnClick: () => {},
				intoLatexFieldOnClick: () => {},
			};
			const { container } = render(<ListItem { ...prop }/>);
			const buttons = container.querySelectorAll("button");

			expect(container).toHaveTextContent(prop.latex);
			expect(buttons).toHaveLength(3);
		});
	});

	describe("without bookmarkOnClick prop", () => {
		it("renders bookmark list item", () => {
			const prop = {
				latex: "2+3",
				customOnClick: () => {},
				deleteOnClick: () => {},
				intoLatexFieldOnClick: () => {},
			};
			const { container } = render(<ListItem { ...prop }/>);
			const buttons = container.querySelectorAll("button");

			expect(container).toHaveTextContent(prop.latex);
			expect(buttons).toHaveLength(2);
		});
	});
});
