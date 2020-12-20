import styled from "styled-components";

import color from "../constants/color";

const ControlContainerLayout = styled.div`
  display: flex;
  
  > button {
    margin-right: 5px;

    svg {
      fill: ${({ theme }) => color.mainTheme0[theme]};
    }
  }
`;

export default ControlContainerLayout;
