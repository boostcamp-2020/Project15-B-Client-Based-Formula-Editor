import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import CustomAddButton from "../../src/presentationals/CustomAddButton";

describe("<CustomAddButton />", () => {
	describe("with isFormOn state false", () => {
		it("renders custom add button: default", () => {
			const { container } = render(<CustomAddButton isFormOn={false} />);

			expect(container).toHaveTextContent("새 커스텀 추가하기");
		});
	});

	describe("with isFormOn state true", () => {
		it("renders custom add button: cancel ", () => {
			const { container } = render(<CustomAddButton isFormOn={true} />);

			expect(container).toHaveTextContent("취소");
		});
	});
});
