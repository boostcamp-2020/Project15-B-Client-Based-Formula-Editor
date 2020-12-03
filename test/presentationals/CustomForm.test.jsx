import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import CustomForm from "../../src/presentationals/CustomForm";

describe("<CustomForm />", () => {
	describe("with default placeholder", () => {
		it("renders custom form", () => {
			const data = { command: "\\cmx", latex: "\\sum41", name: "테스트 버튼", isDisabled: false };
			const onClick = () => { };
			const onSubmit = () => { };
			const { container } = render(<CustomForm data={data} onChange={onClick} onSubmit={onSubmit} />);
			const commandInput = container.querySelector("input");
			const mathfield = container.querySelector(".mq-editable-field");
			const warningMsg = container.querySelector("p");
			const submitBtn = container.querySelector("button");

			expect(warningMsg).toHaveStyle("display:none");
			expect(commandInput.placeholder).toContain("명령어를 다음과 같이 입력하세요");
			expect(commandInput.value).toBe("\\cmx");
			expect(mathfield).toBeVisible();
			expect(submitBtn).toHaveTextContent("테스트 버튼");
		});
	});

	describe("with exist commands(isDisabled is true)", () => {
		it("renders warningMsg", () => {
			const data = { command: "\\sum", latex: "\\sum41", name: "테스트 버튼", isDisabled: true };
			const onClick = () => { };
			const onSubmit = () => { };
			const { container } = render(<CustomForm data={data} onChange={onClick} onSubmit={onSubmit} />);
			const warningMsg = container.querySelector("p");

			expect(warningMsg).toHaveStyle("display:block");
		});
	});
});
