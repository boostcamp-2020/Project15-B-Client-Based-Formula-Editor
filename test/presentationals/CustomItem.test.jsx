import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import CustomItem from "../../src/presentationals/CustomItem";

describe("<CustomItem />", () => {
	it("renders custom item", () => {
		const { container } = render(<CustomItem name={"\\cmx"}/>);
		const [modifyButton, deleteButton] = container.querySelectorAll("button");

		expect(container).toHaveTextContent("\\cmx");
		expect(modifyButton).toHaveTextContent("수정");
		expect(deleteButton).toHaveTextContent("삭제");
	});
});
