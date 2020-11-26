import styled from "styled-components";

const layoutWidth = 300;
const buttonWidth = 30;

const SideBarLayout = styled.div`
	display: flex;
	flex-direction: row;
	width: ${layoutWidth}px;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
	transition: 1s;

	> div {
		width: 100%;
		border: 1px solid black;
		z-index: 5;
		background-color: white;
	}
	> button {
		width: ${buttonWidth}px;
		height: 190px;
		align-self: center;
	}
	&.show{
		right: 0;
	}
	&.hide{
		right: -${layoutWidth - buttonWidth}px;
	}
`;

export default SideBarLayout;
