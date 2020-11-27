import styled from "styled-components";

import { color } from "../GlobalStyle";

const ControlContainerLayout = styled.div`
  display: flex;
  
  > button {
    margin-right: 5px;

    svg {
      fill: ${color.dark};
    }
  }
`;

export default ControlContainerLayout;
