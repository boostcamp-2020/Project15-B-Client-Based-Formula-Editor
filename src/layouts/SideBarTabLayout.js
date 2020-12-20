import styled from "styled-components";

import color from "../constants/color";

const SideBarTabLayout = styled.div`
  background-color: ${({ theme }) => color.mainTheme2[theme]};
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default SideBarTabLayout;
