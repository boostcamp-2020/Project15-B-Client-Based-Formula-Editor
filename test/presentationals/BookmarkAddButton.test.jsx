import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import BookmarkAddButton from "../../src/presentationals/BookmarkAddButton";

describe("<BookmarkAddButton />", () => {
	it("renders book mark button", () => {
		const { container } = render(<BookmarkAddButton />);

		expect(container).toHaveTextContent("현재 수식 즐겨찾기로 추가");
	});
});
