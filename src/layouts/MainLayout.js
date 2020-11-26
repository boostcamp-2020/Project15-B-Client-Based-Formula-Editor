import styled from "styled-components";

const MainLayout = styled.div`
  margin: 0 auto;
  width: 100%;

  @media(max-width: 500px) {
    width: 500px;
  }
  @media(min-width: 1000px) {
    width: 1000px;
  }
`;

export default MainLayout;
