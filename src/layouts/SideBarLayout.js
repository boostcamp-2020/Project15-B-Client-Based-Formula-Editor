import styled from "styled-components";

const SideBarLayout = styled.div`
	display: flex;
	${({ sidebarState, width }) => (sidebarState ? `
		width: ${width}%;
		min-width: 250px;
		` : `
		width: 60px;
		`)}
`;

export default SideBarLayout;
