import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const SideBarTabLayout = styled.div`
  background-color: ${themeColor.light};
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default SideBarTabLayout;
