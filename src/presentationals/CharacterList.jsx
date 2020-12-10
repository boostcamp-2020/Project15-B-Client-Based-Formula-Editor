import React from "react";
import styled from "styled-components";

import CharacterListItem from "./CharacterListItem";

const Layout = styled.div``;

export default function CharacterList({ isOpen, list, handleClickItem }) {
	return (
		<Layout>
			{isOpen && list.map((item, index) =>
				<CharacterListItem
					key={index}
					item={item}
					onClick={handleClickItem}
					isMagnifier={true}
				/>,
			)}
		</Layout>
	);
}
