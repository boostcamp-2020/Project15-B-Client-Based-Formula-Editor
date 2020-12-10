import styled from "styled-components";

import { themeColor } from "../GlobalStyle";

const EditTabHeaderLayout = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: 40px;
	background-color: ${themeColor.light};
`;

export default EditTabHeaderLayout;
