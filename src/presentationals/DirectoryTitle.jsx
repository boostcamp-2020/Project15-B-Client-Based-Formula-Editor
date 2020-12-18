import React from "react";
import styled from "styled-components";

import { themeColor } from "../GlobalStyle";
import DownIcon from "../icons/DownIcon";
import RightIcon from "../icons/RightIcon";
import CloseIcon from "../icons/CloseIcon";
import IconButton from "../presentationals/IconButton";

const Layout = styled.div`
	display: flex;
	cursor: pointer;
	height: 27px;
	align-items: center;
	position: relative;
	padding: 0 10px;

	&:hover {
		background-color: ${themeColor.light};

		> button {
			display: block;
		}
	}

	> svg {
		width: 12px;
		margin-right: 10px;
	}

	> button {
		position: absolute;
		right: 5px;
		display: none;
	}
`;
const Title = styled.div`
	color: ${themeColor.green};
`;

const Number = styled.div`
	color: ${themeColor.green};
	position: absolute;
	right: 20px;
	font-size: 13px;
`;

function DirectoryTitle({
	title,
	onClick,
	isOpen,
	length,
	onClickDeleteButton,
}) {
	return (
		<Layout onClick={onClick} isOpen={isOpen}>
			{isOpen ? <DownIcon /> : <RightIcon/>}
			<Title>{title}</Title>
			{length && <Number>{length}</Number>}
			{onClickDeleteButton &&
				<IconButton
					icon={<CloseIcon fill={themeColor.white} />}
					isHover={true}
					onClick={onClickDeleteButton}
				/>}
		</Layout>
	);
}

export default React.memo(DirectoryTitle);
