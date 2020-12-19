import React from "react";
import styled from "styled-components";

import CharacterListItem from "./CharacterListItem";

const Layout = styled.div``;

function CharacterList({
	title, isOpen, list, handleClickItem, handleMouseEnterItem, previewItem, theme,
}) {
	return (
		<Layout>
			{isOpen && list.map((item, index) =>
				<CharacterListItem
					key={index}
					item={item}
					title={title}
					onClick={handleClickItem}
					isMagnifier={true}
					onMouseEnter={handleMouseEnterItem(item.name)}
					previewItem={previewItem}
					theme={theme}
				/>,
			)}
		</Layout>
	);
}

export default React.memo(CharacterList);
