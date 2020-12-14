import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import BlueButton from "../../src/presentationals/BlueButton";

describe("<BlueButton />", () => {
	it("renders blue button", () => {
		const { container } = render(<BlueButton
			value="북마크에 추가하기"
			onChange={() => {}}
		/>);

		expect(container).toHaveTextContent("북마크에 추가하기");
	});
});
