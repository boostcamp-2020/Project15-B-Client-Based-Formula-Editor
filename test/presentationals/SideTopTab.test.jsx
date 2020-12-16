import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import SideTopTab from "../../src/presentationals/SideTopTab";

describe("<SideTopTab />", () => {
	const svgTitles = ["수식 목록", "최근 수식 목록", "북마크", "커스텀 명령어"];
	const onClick = () => {};

	it("renders side top tab", () => {
		const { container } = render(<SideTopTab onClick={onClick}/>);
		const divs = container.querySelectorAll("div");
		const buttons = container.querySelectorAll("button");
		const svgs = container.querySelectorAll("svg");
		const titles = container.querySelectorAll("title");

		expect(divs).toHaveLength(5);
		expect(buttons).toHaveLength(svgTitles.length);
		expect(svgs).toHaveLength(svgTitles.length);
		expect(titles).toHaveLength(svgTitles.length);
		titles.forEach((title, index) => {
			expect(title).toHaveTextContent(svgTitles[index]);
		});
	});
});
