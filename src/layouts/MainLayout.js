import styled from "styled-components";

const MainLayout = styled.div`
  margin: 0 auto;
  width: calc(100% - 60px);

  @media(max-width: 560px) {
    width: 500px;
  }
  @media(min-width: 1060px) {
    width: 1000px;
  }
`;

export default MainLayout;
