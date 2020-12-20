import styled from "styled-components";

import color from "../constants/color";

const CharacterContainerLayout = styled.div`
  color: ${({ theme }) => color.mainTheme0[theme]};
	padding-bottom: 150px;
	overflow: hidden;
	height: 100%;

  &:hover {
    overflow: overlay;
  }
`;

export default CharacterContainerLayout;
