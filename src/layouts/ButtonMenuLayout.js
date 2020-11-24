import styled from "styled-components";

const ButtonMenuLayout = styled.div`
	display:flex;
	flex-direction: row;
	& > div{
		position:relative;
		display:flex;
		flex-direction:column;
		div{
			position:absolute;
			top:80px;
		}
	}
`;

export default ButtonMenuLayout;
