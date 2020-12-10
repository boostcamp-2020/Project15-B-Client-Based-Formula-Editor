import styled from "styled-components";

const BodyLayout = styled.div`
	min-width: 380px;
  width: ${({ bodyWidth }) => bodyWidth}%;
`;

export default BodyLayout;
