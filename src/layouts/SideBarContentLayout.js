import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const SideBarContentLayout = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${themeColor.normal};
`;

export default SideBarContentLayout;
