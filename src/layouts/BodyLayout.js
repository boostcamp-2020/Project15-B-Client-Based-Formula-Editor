import styled from "styled-components";

import color from "../constants/color";

const BodyLayout = styled.div`
	min-width: 420px;
  ${({ sidebarState, width }) => (sidebarState ?
		`width: ${width}%` :
		`width: calc(100% - 60px)`)};
  background-color: ${({ theme }) => color.mainTheme4[theme]};
`;

export default BodyLayout;
