import styled from "styled-components";

import { color } from "../GlobalStyle";

const EditTabHeaderLayout = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: 40px;
	border: 1px solid ${color.dark};
	background-color: ${color.superLight};
`;

export default EditTabHeaderLayout;
