import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import CustomForm from "../../src/presentationals/CustomForm";

describe("<CustomForm />", () => {
	it("renders custom form", () => {
		const buttonName = "테스트 버튼";
		const { container } = render(<CustomForm buttonName={buttonName} />);
		const [commandInput, mathquillInput] = container.querySelectorAll("input");

		expect(container).toHaveTextContent(buttonName);
		expect(commandInput.placeholder).toContain("명령어를 다음과 같이 입력하세요");
		expect(mathquillInput.placeholder).toContain("mathquill 자리입니다");
	});
});
