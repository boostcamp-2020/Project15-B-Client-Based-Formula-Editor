import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import { fontSizes } from "../constants/fontConfig";
import FontSizeIcon from "../icons/FontSizeIcon";

const Layout = styled.div`
	display: flex;
	align-items: center;
	padding: 0 5px;
	border-right: 1px dashed ${themeColor.white};
`;

const FontSizeInput = styled.input`
	width: 24px;
	margin-left: 3px;
	border: none;
	border-radius: 2px;
	padding: 0 4px;
`;

const FontDropdown = styled.div`
	position: absolute;
	top: 30px;
	transform: translateX(8px);
	background-color: #ffffff45;
	border-radius: 4px;
	padding: 5px 0;
	z-index: 3;
	cursor: pointer;
`;

const FontItem = styled.div`
	color: #1a1a1a;
	padding: 0px 10px;

	&:hover {
		background-color: ${themeColor.white};
		color: black;
	}
`;

export default function FontSizeSelector({
	fontSizeRef,
	fontSize,
	isFontSizeFocused,
	handleFontSizeChange,
	handleFontSizeItemClick,
	handleFontSizeInputClick,
}) {
	return (
		<Layout ref={fontSizeRef}>
			<FontSizeIcon fill={themeColor.white}/>
			<FontSizeInput
				value={fontSize}
				onChange={handleFontSizeChange}
				onClick={handleFontSizeInputClick}
			/>
			{isFontSizeFocused &&
				<FontDropdown>
					{fontSizes.map((size, index) =>
						<FontItem key={index} onClick={handleFontSizeItemClick(size)}>{size}</FontItem>,
					)}
				</FontDropdown>
			}
		</Layout>
	);
}
