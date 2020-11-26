import styled from "styled-components";

const ButtonMenuLayout = styled.div`
	display: flex;
	flex-direction: row;
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
	}
`;

export default ButtonMenuLayout;
