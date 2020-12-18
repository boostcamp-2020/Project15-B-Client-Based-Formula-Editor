import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import { colorChart } from "../constants/fontConfig";
import FontIcon from "../icons/FontIcon";

const FontColorSelectorStyle = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	padding: 0 5px;
	border-right: 1px dashed ${themeColor.white};
`;

const ColorButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
	fill: ${themeColor.white};
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
	background: ${themeColor.light};
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
	background-color: ${(({ color }) => color)};
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
	background: ${themeColor.white};
  border: none;
`;

export default function FontColorSelector({
	fontColorRef,
	fontColor,
	fontDropdown,
	onChange,
	onClickItem,
	onClickButton,
}) {
	return (
		<FontColorSelectorStyle ref={fontColorRef}>
			<ColorButtonLayout onClick={onClickButton}>
				<FontIcon />
				<FontColorUnderline fontColor={fontColor} />
			</ColorButtonLayout>
			<ColorChartLayout>
				{fontDropdown.color &&
					<ColorChart>
						{colorChart.map((row, index) =>
							<ColorChartRow key={index}>
								{row.map((color, i) =>
									<ColorItem
										key={i}
										data-testid={color}
										color={color}
										onClick={onClickItem(color)}
									/>)}
							</ColorChartRow>,
						)}
						<ColorCodeLayout>
							<ColorItem color={fontColor} />
							<ColorCodeInput
								value={fontColor}
								onChange={onChange}
							/>
						</ColorCodeLayout>
					</ColorChart>}
			</ColorChartLayout>
		</FontColorSelectorStyle>
	);
}
