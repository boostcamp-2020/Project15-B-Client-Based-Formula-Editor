import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const ControlContainerLayout = styled.div`
  display: flex;
  
  > button {
    margin-right: 5px;

    svg {
      fill: ${themeColor.white};
    }
  }
`;

export default ControlContainerLayout;
