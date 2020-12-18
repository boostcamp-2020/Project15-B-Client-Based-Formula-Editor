import styled from "styled-components";

const SideTabItemLayout = styled.div`
	&:hover {
		> div:nth-child(2) {
			visibility: visible;
		}
	}
	
	> div:nth-child(2) {
		visibility: hidden;
	}
`;

export default SideTabItemLayout;
