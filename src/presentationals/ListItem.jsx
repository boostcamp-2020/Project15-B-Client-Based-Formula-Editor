import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";
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
	background-color: white;
	height: 100%;
	margin: 5px;
	border-radius: 15px;
	border: 1px solid ${color.dark};
`;

const Formula = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
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
					icon={<CloseIcon fill={color.dark}/>}/>
			</DeleteButton>
			<Item onClick={intoLatexFieldOnClick}>
				<Formula>{latex}</Formula>
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
