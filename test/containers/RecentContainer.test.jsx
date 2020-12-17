import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import RecentContainer from "../../src/containers/RecentContainer";

jest.mock("react-redux");

describe("<RecentContainer />", () => {
	let dispatch;

	beforeEach(() => {
		dispatch = jest.fn();
		useDispatch.mockImplementation(() => dispatch);
	});

	describe("When there is at least one item on the recent items", () => {
		const recentItems = [
			{ id: 0, latex: "aaa", isRecent: true, isBookmark: true, bookmarkPriority: 1, date: "2020.12.15 01:53:22", description: null },
			{ id: 1, latex: "bbb", isRecent: true, isBookmark: false, bookmarkPriority: 0, date: "2020.12.15 01:53:22", description: null },
			{ id: 2, latex: "ccc", isRecent: true, isBookmark: false, bookmarkPriority: 0, date: "2020.12.15 01:53:22", description: null },
		];

		beforeEach(() => {
			useSelector.mockImplementation(selector => selector({
				recentItems,
			}));
		});

		it("renders Recent Container", () => {
			const { container } = render(<RecentContainer/>);
			const divs = container.querySelectorAll("div");
			const svgs = container.querySelectorAll("svg");
			const input = container.querySelector("input");
			const deleteAllButton = container.querySelector("button");

			expect(input.placeholder).toEqual("Search");
			expect(container).toHaveTextContent("최근 수식 목록");
			expect(divs).toHaveLength(3 + recentItems.length * 6);
			expect(svgs).toHaveLength(2);
			expect(deleteAllButton).not.toBeVisible();
			recentItems.forEach(item => {
				expect(container).toHaveTextContent(item.date);
			});
		});
	});

	describe("When you click delete all button", () => {
		it("renders confirm popup", () => {
			const { container } = render(<RecentContainer/>);
			const deleteAllButton = container.querySelector("button");

			fireEvent.click(deleteAllButton);

			const popup = document.body.querySelector(".popup");
			const [cancel, confirm] = popup.querySelectorAll("button");

			expect(cancel).toHaveTextContent("취소");
			expect(confirm).toHaveTextContent("확인");
		});

		it("not call dispatch with click cancel", () => {
			const { container } = render(<RecentContainer/>);
			const deleteAllButton = container.querySelector("button");

			fireEvent.click(deleteAllButton);

			const popup = document.body.querySelector(".popup");
			const [cancel] = popup.querySelectorAll("button");

			fireEvent.click(cancel);

			setTimeout(() => {
				expect(popup).not.toBeVisible();
				expect(dispatch).not.toBeCalled();
			}, 1000);
		});

		it("call dispatch with click confirm", async () => {
			const { container } = render(<RecentContainer/>);
			const deleteAllButton = container.querySelector("button");

			fireEvent.click(deleteAllButton);

			const popup = document.body.querySelector(".popup");
			const [, confirm] = popup.querySelectorAll("button");

			fireEvent.click(confirm);

			setTimeout(() => {
				expect(popup).not.toBeVisible();
				expect(dispatch).toBeCalled();
			}, 1000);
		});
	});

	describe("when recent items is empty", () => {
		beforeEach(() => {
			useSelector.mockImplementation(selector => selector({
				recentItems: [],
			}));
		});
		it("renders Recent Container", () => {
			const { container } = render(<RecentContainer/>);
			const divs = container.querySelectorAll("div");
			const svgs = container.querySelectorAll("svg");
			const input = container.querySelector("input");
			const buttons = container.querySelectorAll("button");

			expect(input.placeholder).toEqual("Search");
			expect(container).toHaveTextContent("최근 수식 목록");
			expect(divs).toHaveLength(5);
			expect(svgs).toHaveLength(3);
			expect(buttons).toHaveLength(1);
		});
	});
});
