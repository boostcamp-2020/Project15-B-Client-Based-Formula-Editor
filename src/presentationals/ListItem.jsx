import React from "react";
import styled from "styled-components";
import { StaticMathField } from "react-mathquill";

import { color, themeColor } from "../GlobalStyle";
import PlusIcon from "../icons/PlusIcon";
import EditIcon from "../icons/EditIcon";
import MinusIcon from "../icons/MinusIcon";
import EmptyStarIcon from "../icons/EmptyStarIcon";
import FilledStarIcon from "../icons/FilledStarIcon";
import IconButton from "./IconButton";

const Layout = styled.div`
	position: fixed;
	width: 250px;
	left: 270px;
	transform: translate(0, -30px);
	color: black;
	z-index: 1;
`;

const Bottom = styled.div`
	position: absolute;
	bottom: 5px;
	right: 5px;
`;

const Item = styled.div`
	background-color: ${themeColor.normal};
	color: ${themeColor.white};
	height: 150px;
	border-radius: 7px;
	border: 1px solid ${themeColor.white};

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
}) {
	const StarIcon = isBookmark ? <FilledStarIcon /> : <EmptyStarIcon fill={color.yellow} />;

	return (
		<Layout>
			<Item onClick={intoLatexFieldOnClick}>
				<StaticMathField>{latex}</StaticMathField>
			</Item>
			<Bottom>
				{bookmarkOnClick &&
					<IconButton onClick={bookmarkOnClick} isHover={true} icon={StarIcon} />}
				{customOnClick &&
					<IconButton onClick={customOnClick} isHover={true} icon={<PlusIcon />} />}
				{editOnClick &&
					<IconButton onClick={editOnClick} isHover={true} icon={<EditIcon />} />}
				<IconButton onClick={deleteOnClick} isHover={true} icon={<MinusIcon />} />
			</Bottom>
		</Layout>
	);
}
