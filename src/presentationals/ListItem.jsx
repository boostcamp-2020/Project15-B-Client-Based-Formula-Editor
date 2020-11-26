import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";
import EmptyStarIcon from "../icons/EmptyStarIcon";
import PlusIcon from "../icons/PlusIcon";
import IconButton from "./IconButton";

const Layout = styled.div`
	height: 150px;
	position: relative;
`;

const Bottom = styled.div`
	position: absolute;
	bottom: 0;
	right: 5px;
`;

const Item = styled.div`
	background-color: #eef1f1;
	height: 100%;
	margin: 5px;
	border-radius: 15px;
	border: 1px solid black;
`;

const Formula = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

export default function ListItem({ latex, bookmarkOnClick, customOnClick }) {
	return (
		<Layout>
			<Item>
				<Formula>{latex}</Formula>
			</Item>
			<Bottom>
				{bookmarkOnClick &&
					<IconButton
						onClick={bookmarkOnClick}
						isHover={true}
						icon={<EmptyStarIcon fill={color.yellow} />}
					/>
				}
				<IconButton onClick={customOnClick} isHover={true} icon={<PlusIcon />} />
			</Bottom>
		</Layout>
	);
}
