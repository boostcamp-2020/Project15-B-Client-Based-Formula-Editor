import styled from "styled-components";

const SideBarLayout = styled.div`
	display: flex;
	width: ${({ width }) => width}%;
	min-width: 250px;
`;

export default SideBarLayout;
