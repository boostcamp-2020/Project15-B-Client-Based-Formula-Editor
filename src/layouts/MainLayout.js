import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const sidebarWidth = "380px";

const MainLayout = styled.div`
  background-color: ${themeColor.black};
  margin: 0 auto;
  width: 100%;
  max-width: calc(100% - ${sidebarWidth});
  display: flex;
`;

export default MainLayout;
