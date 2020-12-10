import styled from "styled-components";

const SideTabItemLayout = styled.div`
	&:hover {
		> div:last-child {
			display: block;
    	width: 250px;
    	position: fixed;
    	left: 270px;
	    transform: translate(0, -30px);
			color: black;
			z-index: 1;
		}
	}
	
	> div:last-child {
		display: none;
	}
`;

export default SideTabItemLayout;
