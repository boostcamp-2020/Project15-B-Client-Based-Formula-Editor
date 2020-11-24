import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 5px 10px;
`;

export default function IconButton({ icon, onClick }) {
	return (
		<Button onClick={onClick}>{icon}</Button>
	);
}
