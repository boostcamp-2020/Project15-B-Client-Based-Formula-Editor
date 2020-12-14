import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import { fontSizes } from "../constants/fontConfig";
import FontSizeIcon from "../icons/FontSizeIcon";
import CheckIcon from "../icons/CheckIcon";

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
	top: 35px;
	transform: translateX(-5px);
	background: linear-gradient(180deg, #5c5c5c, #303030 );
	color: white;
	font-size: 13px;
	font-weight: bold;
	border-radius: 4px;
	padding: 5px 0;
	z-index: 3;
	cursor: pointer;
`;

const FontItem = styled.div`
	display: flex;
  padding: 0px 18px 0px 9px;

	> svg {
		width: 10px;
		margin-right: 4px;
		visibility: hidden;
	}

	&:hover {
    background-color: #43c343;
    color: white;
		
		svg {
			visibility: visible;
		}
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
						<FontItem key={index} onClick={handleFontSizeItemClick(size)}>
							<CheckIcon />
							<div>{size}</div>
						</FontItem>,
					)}
				</FontDropdown>
			}
		</Layout>
	);
}
