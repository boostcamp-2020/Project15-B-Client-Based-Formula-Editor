import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import CharacterListItem from "../../src/presentationals/CharacterListItem";

describe("<CharacterListItem />", () => {
	it("renders character", () => {
		const item = { symbol: "-", name: "minus", latex: "-", isSymbol: true };

		const { container } = render(
			<CharacterListItem
				item={item}
				onClick={() => {}}
				isMagnifier={true}
				title="operator"
				onMouseEnter={() => {}}
				previewItem={() => {}}
			/>,
		);

		expect(container).toHaveTextContent("minus");
	});
});
