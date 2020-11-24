import React from "react";
import styled from "styled-components";

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
	background-color: grey;
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
				{bookmarkOnClick && <IconButton onClick={bookmarkOnClick} icon={"*"} />}
				<IconButton onClick={customOnClick} icon={"+"} />
			</Bottom>
		</Layout>
	);
}
