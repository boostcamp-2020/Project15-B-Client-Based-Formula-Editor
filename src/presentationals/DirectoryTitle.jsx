import React from "react";
import styled from "styled-components";

import color from "../constants/color";
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
		background-color: ${({ theme }) => color.mainTheme2[theme]};

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
	color: ${({ theme }) => color.mainThemeGreen[theme]};
`;

const Number = styled.div`
	color: ${({ theme }) => color.mainThemeGreen[theme]};
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
	theme,
}) {
	return (
		<Layout onClick={onClick} isOpen={isOpen} theme={theme}>
			{isOpen ? <DownIcon /> : <RightIcon/>}
			<Title theme={theme}>{title}</Title>
			{length && <Number theme={theme}>{length}</Number>}
			{onClickDeleteButton &&
				<IconButton
					icon={<CloseIcon fill={color.mainTheme0[theme]} />}
					isHover={true}
					onClick={onClickDeleteButton}
				/>}
		</Layout>
	);
}

export default React.memo(DirectoryTitle);
