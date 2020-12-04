import React from "react";
import styled from "styled-components";

import IconButton from "./IconButton";
import CloseIcon from "../icons/CloseIcon";

const Layout = styled.div`
  display: flex;

  > button {
    display: none;
  }

  &:hover {
    > button {
      display: block;
    }
  }
`;

const Title = styled.div`
  text-align: center;
  margin: 15px 0;
  font-weight: 500;
`;

export default function SideBarHeader({ title, onClick }) {
	return (
		<Layout>
			<Title>{title}</Title>
			<IconButton
				icon={<CloseIcon />}
				isHover={true}
				onClick={onClick}
			/>
		</Layout>
	);
}
