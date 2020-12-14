import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import AutoComplete from "../../src/presentationals/AutoComplete";

describe("<AutoComplete />", () => {
	it("renders auto complete feature box", () => {
		const recommandationList = ["\\sqrt", "\\pm"];

		const { container } = render(
			<AutoComplete
				isOpen={true}
				x={0}
				y={0}
				recommandationList={recommandationList}
				targetIndex={0}
			/>,
		);

		expect(container).toHaveTextContent("sqrt");
		expect(container).toHaveTextContent("pm");
	});
});
