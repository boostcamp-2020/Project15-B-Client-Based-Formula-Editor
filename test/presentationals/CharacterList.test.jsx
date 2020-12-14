import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import CharacterList from "../../src/presentationals/CharacterList";

describe("<CharacterList />", () => {
	const list = [
		{ symbol: "-", name: "minus", latex: "-", isSymbol: true },
		{ symbol: "+", name: "plus", latex: "+", isSymbol: true },
	];

	describe("with isOpen prop true", () => {
		it("renders characters", () => {
			const { container } = render(
				<CharacterList
					isOpen={true}
					list={list}
					handleClickItem={() => {}}
				/>,
			);

			expect(container).toHaveTextContent("minus");
			expect(container).toHaveTextContent("plus");
		});
	});

	describe("with isOpen prop false", () => {
		it("doesn't render any characters", () => {
			const { container } = render(
				<CharacterList
					isOpen={false}
					list={list}
					handleClickItem={() => {}}
				/>,
			);

			expect(container).not.toHaveTextContent("minus");
			expect(container).not.toHaveTextContent("plus");
		});
	});
});
