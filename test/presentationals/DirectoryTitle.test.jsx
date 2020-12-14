import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import DirectoryTitle from "../../src/presentationals/DirectoryTitle";

describe("<DirectoryTitle />", () => {
	it("renders title of directory", () => {
		const { container } = render(
			<DirectoryTitle
				title="operator"
				onClick={() => {}}
				isOpen={true}
				length={30}
				onClickDeleteButton={() => {}}
			/>,
		);

		expect(container).toHaveTextContent("operator");
		expect(container).toHaveTextContent("30");
	});
});
