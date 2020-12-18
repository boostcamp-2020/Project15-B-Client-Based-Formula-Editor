import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import IconButton from "../../src/presentationals/IconButton";

describe("<IconButton />", () => {
	const onClick = jest.fn();

	it("renders icon button", () => {
		const icon = "test";
		const { container } = render(<IconButton icon={icon} onClick={onClick}/>);
		const button = container.querySelector("button");

		fireEvent.click(button);

		expect(button).toBeVisible();
		expect(button).toHaveTextContent(icon);
		expect(onClick).toBeCalled();
	});
});
