import styled from "styled-components";

import { color } from "../GlobalStyle";

const ButtonMenuLayout = styled.div`
	display: flex;
	position: relative;
	z-index: 2;
	width: max-content;
	
	& > div {
		position: relative;
		display: flex;
		flex-direction: column;

		div {
			position: absolute;
			top: 80px;
		}

		button {
			border-left: 0;
		}

		&:first-child button {
			border-left: 1px solid ${color.dark};
		}
	}
`;

export default ButtonMenuLayout;
