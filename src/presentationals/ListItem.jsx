import React from "react";
import styled from "styled-components";
import { StaticMathField } from "react-mathquill";

import color from "../constants/color";
import PlusIcon from "../icons/PlusIcon";
import EditIcon from "../icons/EditIcon";
import MinusIcon from "../icons/MinusIcon";
import EmptyStarIcon from "../icons/EmptyStarIcon";
import FilledStarIcon from "../icons/FilledStarIcon";
import IconButton from "./IconButton";

const Layout = styled.div.attrs(({ top }) => ({ style: { top: `${top}px` } }))`
	position: absolute;
	width: 250px;
	transform: translateX(90%);
	color: black;
	z-index: 10;
	right: 0;
`;

const Bottom = styled.div`
	position: absolute;
	bottom: 5px;
	right: 5px;
`;

const Item = styled.div`
	background-color: ${({ theme }) => color.mainTheme3[theme]};
	color: ${({ theme }) => color.mainTheme0[theme]};
	height: 150px;
	border-radius: 7px;
	border: 1px solid black;
	box-shadow: inset 0 0 2px white;

	> .mq-math-mode {
		width: 90%;
		text-align: center;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		cursor: pointer;
	}
`;

export default function ListItem({
	latex,
	deleteOnClick,
	bookmarkOnClick,
	customOnClick,
	editOnClick,
	intoLatexFieldOnClick,
	isBookmark,
	top,
	theme,
}) {
	const StarIcon = isBookmark ?
		<FilledStarIcon /> : <EmptyStarIcon fill={color.mainThemeYellow[theme]} />;

	return (
		<Layout top={top}>
			<Item onClick={intoLatexFieldOnClick} theme={theme}>
				<StaticMathField>{latex}</StaticMathField>
			</Item>
			<Bottom>
				{bookmarkOnClick &&
					<IconButton onClick={bookmarkOnClick} isHover={true} icon={StarIcon} />}
				{editOnClick &&
					<IconButton onClick={editOnClick} isHover={true} icon={<EditIcon />} />}
				{customOnClick &&
					<IconButton onClick={customOnClick} isHover={true} icon={<PlusIcon />} />}
				{deleteOnClick &&
					<IconButton onClick={deleteOnClick} isHover={true} icon={<MinusIcon />} />}
			</Bottom>
		</Layout>
	);
}
