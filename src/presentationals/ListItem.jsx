import React from "react";
import styled from "styled-components";
import { StaticMathField } from "react-mathquill";

import { color, themeColor } from "../GlobalStyle";
import EmptyStarIcon from "../icons/EmptyStarIcon";
import FilledStarIcon from "../icons/FilledStarIcon";
import PlusIcon from "../icons/PlusIcon";
import CloseIcon from "../icons/CloseIcon";
import IconButton from "./IconButton";

const Layout = styled.div`
	height: 150px;
	position: relative;

	&:hover {
		> div:first-child {
			display: block;
		}
	}
`;

const Bottom = styled.div`
	position: absolute;
	bottom: 0;
	right: 5px;
`;

const Item = styled.div`
	background-color: ${themeColor.normal};
	color: ${themeColor.white};
	height: 100%;
	margin: 5px;
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

const DeleteButton = styled.div`
	position: absolute;
	right: 5px;
	top: 5px;
	display: none;
`;

export default function ListItem({
	latex,
	deleteOnClick,
	bookmarkOnClick,
	customOnClick,
	intoLatexFieldOnClick,
	isBookmark,
}) {
	return (
		<Layout>
			<DeleteButton>
				<IconButton
					onClick={deleteOnClick}
					isHover={true}
					icon={<CloseIcon fill={themeColor.white}/>}/>
			</DeleteButton>
			<Item onClick={intoLatexFieldOnClick}>
				<StaticMathField>{latex}</StaticMathField>
			</Item>
			<Bottom>
				{bookmarkOnClick &&
					<IconButton
						onClick={bookmarkOnClick}
						isHover={true}
						icon={isBookmark ?
							<FilledStarIcon /> :
							<EmptyStarIcon fill={color.yellow} />}
					/>
				}
				<IconButton
					onClick={customOnClick}
					isHover={true}
					icon={<PlusIcon />} />
			</Bottom>
		</Layout>
	);
}
