import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const EditTabHeaderLayout = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: 40px;
	border: 1px solid ${themeColor.superLight};
	background-color: ${themeColor.dark};
`;

export default EditTabHeaderLayout;
