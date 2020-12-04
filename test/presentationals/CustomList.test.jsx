import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import CustomList from "../../src/presentationals/CustomList";

describe("<CustomList />", () => {
	it("renders custom list items", () => {
		const customs = [{ id: 0, command: "\\aaa", latex: "\\aaa" }, { id: 1, command: "\\bbb", latex: "\\bbb" }, { id: 2, command: "\\ccc", latex: "\\ccc" }];
		const onClickEdit = () => { };
		const onClickDelete = () => { };
		const { container } =
			render(<CustomList customs={customs} onClickEdit={onClickEdit} onClickDelete={onClickDelete} />);
		const buttons = container.querySelectorAll("button");

		expect(container).toHaveTextContent("사용자 명령어 목록");
		expect(container).toHaveTextContent("\\aaa");
		expect(container).toHaveTextContent("\\bbb");
		expect(container).toHaveTextContent("\\ccc");
		expect(buttons).toHaveLength(customs.length * 2);
	});
});
