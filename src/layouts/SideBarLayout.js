import styled from "styled-components";

import { color } from "../GlobalStyle";

const layoutWidth = 300;
const buttonWidth = 30;
const LessThanIcon = 1;
const GreaterThanIcon = 2;

const SideBarLayout = styled.div`
	display: flex;
	flex-direction: row;
	width: ${layoutWidth}px;
	height: 100%;
	position: fixed;
	top: 0;
	right: ${({ isOpenSidebar }) => (isOpenSidebar ? "0" : `-${layoutWidth - buttonWidth}px`)};
	transition: 1s;
	z-index: 5;

	> div {
		width: ${layoutWidth - buttonWidth}px;
		border-left: 2px solid ${color.dark};
		background-color: ${color.superLight};
	}
	> button {
		width: ${buttonWidth}px;
		height: 150px;
		align-self: center;
		box-shadow: 0 0 15px 0 ${color.normal};
		border-radius: 30px 0 0 30px;
		background-color: white;

		&:nth-child(${LessThanIcon}) {
			display: ${({ isOpenSidebar }) => (isOpenSidebar ? "none" : "block")};
		}
		&:nth-child(${GreaterThanIcon}) {
			display: ${({ isOpenSidebar }) => (isOpenSidebar ? "block" : "none")};
		}
	}
`;

export default SideBarLayout;
