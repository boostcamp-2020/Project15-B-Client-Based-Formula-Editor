import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import ListItem from "../../src/presentationals/ListItem";

describe("<ListItem />", () => {
	const latex = "2+3";

	describe("with bookmarkOnClick prop", () => {
		it("renders list item", () => {
			const bookmarkOnClick = () => {};
			const { container } = render(<ListItem { ...{ latex, bookmarkOnClick } }/>);
			const buttons = container.querySelectorAll("button");

			expect(container).toHaveTextContent(latex);
			expect(buttons).toHaveLength(1);
		});
	});

	describe("with customOnClick prop", () => {
		it("renders list item", () => {
			const customOnClick = () => {};
			const { container } = render(<ListItem { ...{ latex, customOnClick } }/>);
			const buttons = container.querySelectorAll("button");

			expect(container).toHaveTextContent(latex);
			expect(buttons).toHaveLength(1);
		});
	});

	describe("with editOnClick prop", () => {
		it("renders list item", () => {
			const editOnClick = () => {};
			const { container } = render(<ListItem { ...{ latex, editOnClick } }/>);
			const buttons = container.querySelectorAll("button");

			expect(container).toHaveTextContent(latex);
			expect(buttons).toHaveLength(1);
		});
	});

	describe("with deleteOnClick prop", () => {
		it("renders list item", () => {
			const deleteOnClick = () => {};
			const { container } = render(<ListItem { ...{ latex, deleteOnClick } }/>);
			const buttons = container.querySelectorAll("button");

			expect(container).toHaveTextContent(latex);
			expect(buttons).toHaveLength(1);
		});
	});
});
