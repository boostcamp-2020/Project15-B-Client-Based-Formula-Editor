import React from "react";
import styled from "styled-components";

import IconButton from "./IconButton";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";

const Layout = styled.div`
	position: relative;

	&:hover {
		> div:last-child {
			display: block;
		}
	}
`;

const Item = styled.div`
	background-color: #eef1f1;
	border: 1px solid black;
	height: 50px;
	cursor: pointer;
`;

const Title = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Buttons = styled.div`
	display: none;
	position: absolute;
	right: 5px;
	top: 50%;
	transform: translateY(-50%);
`;

export default function CustomItem({ name, onClickEdit, onClickDelete }) {
	return (
		<Layout>
			<Item onClick={onClickEdit}>
				<Title>{name}</Title>
			</Item>
			<Buttons>
				<IconButton onClick={onClickEdit} isHover={true} icon={<EditIcon />} />
				<IconButton onClick={onClickDelete} isHover={true} icon={<DeleteIcon />} />
			</Buttons>
		</Layout>
	);
}
