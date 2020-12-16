import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import SideBottomTab from "../../src/presentationals/SideBottomTab";

describe("<SideBottomTab />", () => {
	const imageDownload = { isOpen: false, message: "imageDownload" };
	const linkCopy = { isOpen: false, message: "linkCopy" };
	const formulaSave = { isOpen: false, message: "formulaSave" };
	const handleFunction = () => {};
	const svgTitles = ["수식 임시저장", "링크 복사", "이미지로 다운로드"];

	it("renders side bottom tab", () => {
		const { container } = render(
			<SideBottomTab
				imageDownload={imageDownload}
				linkCopy={linkCopy}
				formulaSave={formulaSave}
				handleSaveFormula={handleFunction}
				handleCopyLink={handleFunction}
				handleDownloadAsImage={handleFunction}
			/>,
		);

		const divs = container.querySelectorAll("div");
		const buttons = container.querySelectorAll("button");
		const svgs = container.querySelectorAll("svg");
		const titles = container.querySelectorAll("title");

		expect(container).toHaveTextContent(imageDownload.message);
		expect(container).toHaveTextContent(linkCopy.message);
		expect(container).toHaveTextContent(formulaSave.message);
		expect(divs).toHaveLength(10);
		expect(buttons).toHaveLength(3);
		expect(svgs).toHaveLength(6);
		expect(titles).toHaveLength(svgTitles.length);
		titles.forEach((title, index) => {
			expect(title).toHaveTextContent(svgTitles[index]);
		});
	});
});
