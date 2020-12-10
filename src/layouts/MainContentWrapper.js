import styled from "styled-components";

const MainContentWrapper = styled.div`
  min-width: 380px;
  width: ${({ bodyWidth }) => bodyWidth}%;
`;

export default MainContentWrapper;
