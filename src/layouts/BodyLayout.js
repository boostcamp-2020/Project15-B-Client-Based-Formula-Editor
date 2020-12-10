import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const BodyLayout = styled.div`
	min-width: 380px;
  width: ${({ bodyWidth }) => bodyWidth}%;
  background-color: ${themeColor.dark};
`;

export default BodyLayout;
