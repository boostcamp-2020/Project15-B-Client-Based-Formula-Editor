import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import BubblePopup from "../../src/presentationals/BubblePopup";

describe("<BubblePopup />", () => {
	it("renders popup like bubble", () => {
		const { container } = render(
			<BubblePopup
				isOpen={false}
				message="링크가 저장되었습니다."
			/>,
		);

		expect(container).toHaveTextContent("링크가 저장되었습니다");
	});
});
