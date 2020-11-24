import React from "react";
import styled from "styled-components";

import CustomItem from "./CustomItem";

const Layout = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;

	> * {
		margin: 2.5px 5px;
	}
`;

export default function CustomList({ customs, onClickItem }) {
	return (
		<Layout>
			<div>내 코드들</div>
			{customs.map(({ id, name }) =>
				<CustomItem
					key={id}
					name={name}
					onClick={onClickItem}
				/>)}
		</Layout>
	);
}
