import React from "react";
import styled from "styled-components";

import color from "../constants/color";
import { colorChart } from "../constants/fontConfig";
import FontIcon from "../icons/FontIcon";

const FontColorSelectorStyle = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	padding: 0 5px;
	border-right: 1px dashed ${({ theme }) => color.mainTheme0[theme]};
`;

const ColorButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
	fill: ${({ theme }) => color.mainTheme0[theme]};
`;

const FontColorUnderline = styled.div`
	cursor: pointer;
	outline: none;
	height: 5px;
	margin-top: 3px;
	border: 0;
	background-color: ${(({ fontColor }) => fontColor)};
	width: 30px;
`;

const ColorChartLayout = styled.div``;

const ColorChart = styled.div`
	position: absolute;
	top: 40px;
	border-radius: 3px;
	padding: 10px;
	z-index: 3;
	background: ${({ theme }) => color.mainTheme2[theme]};
	border: 1px solid black;
	box-shadow: inset 0 0 1px white;
`;

const ColorChartRow = styled.div`
	display: flex;
`;

const ColorItem = styled.button`
	width: 20px;
	height: 20px;
	margin: 1px;
	border: none;
	background-color: ${(({ backGroundColor }) => backGroundColor)};
	cursor: pointer;
`;

const ColorCodeLayout = styled.div`
	display: flex;
	margin-top: 10px;
`;

const ColorCodeInput = styled.input`
  margin-left: 10px;
  width: 144px;
  text-align: center;
	background: ${({ theme }) => color.mainTheme1[theme]};;
  border: none;
`;

export default function FontColorSelector({
	fontColorRef,
	fontColor,
	fontDropdown,
	onChange,
	onClickItem,
	onClickButton,
	theme,
}) {
	return (
		<FontColorSelectorStyle ref={fontColorRef} theme={theme}>
			<ColorButtonLayout onClick={onClickButton} theme={theme}>
				<FontIcon />
				<FontColorUnderline fontColor={fontColor} />
			</ColorButtonLayout>
			<ColorChartLayout>
				{fontDropdown.color &&
					<ColorChart theme={theme}>
						{colorChart.map((row, index) =>
							<ColorChartRow key={index}>
								{row.map((backGroundColor, i) =>
									<ColorItem
										key={i}
										data-testid={backGroundColor}
										backGroundColor={backGroundColor}
										onClick={onClickItem(backGroundColor)}
									/>)}
							</ColorChartRow>,
						)}
						<ColorCodeLayout>
							<ColorItem color={fontColor} />
							<ColorCodeInput
								value={fontColor}
								onChange={onChange}
								theme={theme}
							/>
						</ColorCodeLayout>
					</ColorChart>}
			</ColorChartLayout>
		</FontColorSelectorStyle>
	);
}
