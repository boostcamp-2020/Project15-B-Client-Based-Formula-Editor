import React from "react";
import styled from "styled-components";

import CustomItem from "./CustomItem";
import SideBarHeader from "../presentationals/SideBarHeader";

const Layout = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;

	> * {
		margin: 2.5px 5px;

		&:first-child {
			margin: 3.5px 5px 13.5px 5px;
		}
	}
`;

export default function CustomList({ customs, onClickEdit, onClickDelete }) {
	return (
		<Layout>
			<SideBarHeader title={"사용자 명령어 목록"} />
			{customs.map(({ command }, index) =>
				<CustomItem
					key={index}
					name={command}
					onClickEdit={onClickEdit(index)}
					onClickDelete={onClickDelete(index)}
				/>)}
		</Layout>
	);
}
