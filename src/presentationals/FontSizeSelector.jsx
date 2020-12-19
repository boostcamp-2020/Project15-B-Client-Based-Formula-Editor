import React from "react";
import styled from "styled-components";

import color from "../constants/color";
import { fontSizes } from "../constants/fontConfig";
import FontSizeIcon from "../icons/FontSizeIcon";
import CheckIcon from "../icons/CheckIcon";

const Layout = styled.div`
	display: flex;
	align-items: center;
	padding: 0 5px;
	border-right: 1px dashed ${({ theme }) => color.mainTheme0[theme]};
	position: relative;
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
	bottom: 0;
	transform: translate(-4px, 100%);
	background: ${({ theme }) => color.mainTheme2[theme]};
	color: ${({ theme }) => color.mainTheme0[theme]};
	font-size: 13px;
	font-weight: bold;
	padding: 5px 0;
	z-index: 3;
	width: 55px;
	cursor: pointer;
	border-radius: 5px;
	border: 1px solid black;
	box-shadow: inset 0 0 1px white;
`;

const FontItem = styled.div`
	text-align: center;
	width: 100%;
	position: relative;

	> svg {
		position: absolute;
		width: 10px;
		left: 5px;
		top: 50%;
		transform: translateY(-50%);
	}

	&:hover {
    background-color: #43c343;
	}
`;

function FontSizeSelector({
	fontSizeRef,
	fontSize,
	fontSizeForView,
	fontDropdown,
	handleFontSizeChange,
	handleFontSizeItemClick,
	handleFontSizeInputClick,
	theme,
}) {
	return (
		<Layout ref={fontSizeRef} theme={theme}>
			<FontSizeIcon fill={color.mainTheme0[theme]}/>
			<FontSizeInput
				value={fontSizeForView}
				onChange={handleFontSizeChange}
				onClick={handleFontSizeInputClick}
				placeholder={fontSize}
			/>
			{fontDropdown.size &&
				<FontDropdown theme={theme}>
					{fontSizes.map((size, index) =>
						<FontItem key={index} onClick={handleFontSizeItemClick(size)}>
							<div>{size}</div>
							{fontSize === size && <CheckIcon />}
						</FontItem>,
					)}
				</FontDropdown>
			}
		</Layout>
	);
}

export default React.memo(FontSizeSelector);
