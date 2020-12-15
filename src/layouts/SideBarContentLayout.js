import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const SideBarContentLayout = styled.div`
	width: calc(100% - 60px);
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${themeColor.normal};
`;

export default SideBarContentLayout;
