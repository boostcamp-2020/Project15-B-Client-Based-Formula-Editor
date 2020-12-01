import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useSelector, useDispatch } from "react-redux";

import FooterContainer from "../../src/containers/FooterContainer";

jest.mock("react-redux");

describe("<FooterContainer />", () => {
	let dispatch;

	beforeEach(() => {
		useSelector.mockImplementation(selector => selector({
			latexInput: "3+5",
			bubblePopup: {
				imageDownload: null,
				linkCopy: null,
				formulaSave: null,
			},
		}));

		dispatch = jest.fn();
		useDispatch.mockImplementation(() => dispatch);

		document.execCommand = jest.fn().mockImplementation(() => {});
	});

	it("renders footer buttons", () => {
		const { getByText } = render(<FooterContainer />);

		const linkCopyButton = getByText("링크 복사");
		const imageDownloadButton = getByText("이미지로 다운로드");
		const formulaSaveButton = getByText("수식 임시저장");

		expect(linkCopyButton).toBeVisible();
		expect(imageDownloadButton).toBeVisible();
		expect(formulaSaveButton).toBeVisible();

		fireEvent.click(linkCopyButton);

		expect(dispatch).toBeCalled();
	});
});
