import styled from "styled-components";

import color from "../constants/color";

const EditTabHeaderLayout = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: 40px;
	background-color: ${({ theme }) => color.mainTheme2[theme]};
`;

export default EditTabHeaderLayout;
