import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const BodyLayout = styled.div`
	min-width: 380px;
  ${({ sidebarState, width }) => (sidebarState ?
		`width: ${width}%` :
		`width: calc(100% - 60px)`)};
  background-color: ${themeColor.dark};
`;

export default BodyLayout;
