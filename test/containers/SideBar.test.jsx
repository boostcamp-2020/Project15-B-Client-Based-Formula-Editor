import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import SideBar from "../../src/containers/SideBar";
import characterLatex from "../../src/constants/characterLatex";

jest.mock("react-redux");

describe("<SideBar />", () => {
	const bubblePopup = {
		imageDownload: { isOpen: false, message: "" },
		linkCopy: { isOpen: false, message: "" },
		formulaSave: { isOpen: false, message: "" },
	};
	const characterTabState = {
		character: false,
		operator: false,
		formula: false,
		example: false,
	};

	const dispatch = jest.fn();

	beforeEach(() => {
		window.console.error = jest.fn();
		useDispatch.mockImplementation(() => dispatch);
	});

	describe("when the first page loads", () => {
		beforeEach(() => {
			useSelector.mockImplementation(selector => selector({
				bubblePopup,
				characterTabState,
				sidebarState: true,
			}));
		});

		it("renders side bar", () => {
			const { container } = render(<SideBar />);
			const divs = container.querySelectorAll("div");
			const svgs = container.querySelectorAll("svg");
			const buttons = container.querySelectorAll("button");
			const input = container.querySelector("input");

			expect(divs).toHaveLength(39);
			expect(svgs).toHaveLength(14);
			expect(buttons).toHaveLength(7);
			expect(input.placeholder).toEqual("Search");
			Object.keys(characterLatex).forEach(item => {
				expect(container).toHaveTextContent(item);
				expect(container).toHaveTextContent(characterLatex[item].length);
			});
		});
	});

	describe("when the sidebar is closed", () => {
		beforeEach(() => {
			useSelector.mockImplementation(selector => selector({
				bubblePopup,
				characterTabState,
				sidebarState: false,
			}));
		});

		it("test close side bar", () => {
			const { container } = render(<SideBar />);
			const svg = container.querySelector("svg");

			fireEvent.click(svg);
			expect(dispatch).toBeCalled();
		});

		it("renders side bar", () => {
			const { container } = render(<SideBar />);
			const divs = container.querySelectorAll("div");
			const svgs = container.querySelectorAll("svg");
			const buttons = container.querySelectorAll("button");

			expect(divs).toHaveLength(17);
			expect(svgs).toHaveLength(10);
			expect(buttons).toHaveLength(7);
		});
	});
});
