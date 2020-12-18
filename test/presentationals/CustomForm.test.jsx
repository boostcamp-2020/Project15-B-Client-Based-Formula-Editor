import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import CustomForm from "../../src/presentationals/CustomForm";

describe("<CustomForm />", () => {
	beforeEach(() => {
		window.console.error = jest.fn();
	});

	describe("with default placeholder", () => {
		it("renders custom form", () => {
			const value = { command: "\\cmx", latex: "\\sum41", name: "테스트 버튼", description: "설명" };
			const onEvent = () => {};
			const warningMessage = {};

			const { container } = render(<CustomForm
				value={value}
				onChangeCommand={onEvent}
				onChangeLatex={onEvent}
				onChangeDescription={onEvent}
				onSubmit={onEvent}
				warningMessage={warningMessage}
			/>);

			const [command, description] = container.querySelectorAll("input");
			const mathfield = container.querySelector(".mq-editable-field");
			const submitBtn = container.querySelector("button");

			expect(command.placeholder).toContain("명령어를 입력해주세요");
			expect(command.value).toBe(value.command);
			expect(description.placeholder).toContain("설명을 입력해주세요");
			expect(description.value).toBe(value.description);
			expect(mathfield).toBeVisible();
			expect(submitBtn).toHaveTextContent(value.name);
		});
	});

	describe("with warning message", () => {
		it("renders warning message", () => {
			const value = { command: "", latex: "\\sum41", name: "테스트 버튼", description: "설명" };
			const onEvent = () => {};
			const warningMessage = { command: "이미 존재하는 이름입니다.", latex: "수식은 공백일 수 없습니다." };

			const { container } = render(<CustomForm
				value={value}
				onChangeCommand={onEvent}
				onChangeLatex={onEvent}
				onChangeDescription={onEvent}
				onSubmit={onEvent}
				warningMessage={warningMessage}
			/>);

			expect(container).toHaveTextContent(warningMessage.command);
			expect(container).toHaveTextContent(warningMessage.latex);
		});
	});
});
