import React from "react";
import styled from "styled-components";

import { color } from "../GlobalStyle";

const TabLayout = styled.div`
  display: flex;
`;

const Tab = styled.div`
  border-radius: 10px 10px 0 0;
  border: 1px solid black;
  padding: 5px 15px;
  flex-grow: 1;
  text-align: center;

  ${({ isSelected }) => (isSelected ?
		`
      background-color: white;
      border-bottom: none;
    ` :
		`
      background-color: ${color.light};
      &:hover {
        cursor: pointer;
        background-color: ${color.normal};
      }
  `)}
`;

export default function SideBarTab({ currentTab, onClick }) {
	const tabMenus = ["최근", "즐찾", "커스텀"];

	return (
		<TabLayout>
			{tabMenus.map((tabMenu, index) =>
				<Tab onClick={onClick(index)} key={index} isSelected={currentTab === index}>
					{tabMenu}
				</Tab>,
			)}
		</TabLayout>
	);
}
