import styled from "styled-components";

import color from "../constants/color";

const SideBarContentLayout = styled.div`
	width: calc(100% - 60px);
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => color.mainTheme3[theme]};
`;

export default SideBarContentLayout;
