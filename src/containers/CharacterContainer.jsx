import React, { useState } from "react";

import { latexFunction } from "../util";
import characterLatex from "../constants/characterLatex";
import CharacterContainerLayout from "../layouts/CharacterContainerLayout";
import CharacterList from "../presentationals/CharacterList";
import DirectoryTitle from "../presentationals/DirectoryTitle";
import Filter from "../presentationals/Filter";

export default function CharacterContainer() {
	const [isOpenMenu, setIsOpenMenu] = useState({
		character: false,
		operator: false,
		formula: false,
	});

	const handleClickItem = latex => () => {
		latexFunction.insertLatex(latex);
	};

	const handleClickMenu = title => () => {
		setIsOpenMenu({ ...isOpenMenu, [title]: !isOpenMenu[title] });
	};

	return (
		<>
			<Filter />
			<CharacterContainerLayout>
				{Object.keys(isOpenMenu).map(title =>
					<div key={title}>
						<DirectoryTitle
							title={title}
							onClick={handleClickMenu(title)}
							isOpen={isOpenMenu[title]}
							length={characterLatex[title].length}
						/>
						<CharacterList
							isOpen={isOpenMenu[title]}
							list={characterLatex[title]}
							handleClickItem={handleClickItem}
						/>
					</div>,
				)}
			</CharacterContainerLayout>
		</>
	);
}
