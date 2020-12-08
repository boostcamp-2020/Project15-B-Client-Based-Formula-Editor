import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const SideBarLayout = styled.div`
	min-width: 300px;
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${themeColor.normal};
`;

export default SideBarLayout;
