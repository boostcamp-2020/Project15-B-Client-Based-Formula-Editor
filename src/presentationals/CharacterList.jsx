import React from "react";
import styled from "styled-components";

import CharacterListItem from "./CharacterListItem";

const Layout = styled.div``;

export default function CharacterList({ title, isOpen, list, handleClickItem }) {
	return (
		<Layout>
			{isOpen && list.map((item, index) =>
				<CharacterListItem
					key={index}
					item={item}
					title={title}
					onClick={handleClickItem}
					isMagnifier={true}
				/>,
			)}
		</Layout>
	);
}
