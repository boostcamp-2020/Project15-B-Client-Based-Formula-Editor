import styled from "styled-components";

const SideBarLayout = styled.div`
	display: flex;
	flex-direction: row;
	width: 25%;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
	& > div {
		width:100%;
		border: 1px solid black;
		z-index: 5;
		background-color: white;
	}
	& > button {
		width: 30px;
		height: 190px;
		align-self: center;
	}
	&.show{
		margin: 0;
	}
	&.hide{
		margin: 0 -23% 0 0;
	}
`;

export default SideBarLayout;
