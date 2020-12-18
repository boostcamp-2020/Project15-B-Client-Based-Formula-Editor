import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const CharacterContainerLayout = styled.div`
  color: ${themeColor.white};
	padding-bottom: 150px;
	overflow: hidden;
	height: 100%;

  &:hover {
    overflow: overlay;
  }
`;

export default CharacterContainerLayout;
