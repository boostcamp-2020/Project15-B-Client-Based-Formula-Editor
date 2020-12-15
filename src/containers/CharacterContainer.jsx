import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCharacterTabState } from "../slice";
import { latexFunction } from "../util";
import characterLatex from "../constants/characterLatex";
import CharacterContainerLayout from "../layouts/CharacterContainerLayout";
import CharacterList from "../presentationals/CharacterList";
import DirectoryTitle from "../presentationals/DirectoryTitle";
import Filter from "../presentationals/Filter";

export default function CharacterContainer() {
	const dispatch = useDispatch();
	const isOpenMenu = useSelector(state => state.characterTabState);
	const [searchTerm, setSearchTerm] = useState("");
	const titles = Object.keys(isOpenMenu);

	const handleClickItem = latex => () => {
		latexFunction.insertLatex(latex);
	};

	const handleClickMenu = title => () => {
		dispatch(setCharacterTabState(title));
	};


	const handleFilter = ({ target }) => {
		const inputValue = target.value;

		if (!inputValue) {
			setSearchTerm("");
			titles.forEach(title => {
				if (isOpenMenu[title]) { dispatch(setCharacterTabState(title)); }
			});
			return;
		}
		setSearchTerm(inputValue);

		titles.forEach(title => {
			if (!isOpenMenu[title]) dispatch(setCharacterTabState(title));
		});
	};

	return (
		<>
			<Filter onChange={handleFilter}/>
			<CharacterContainerLayout>
				{titles.map(title => {
					const filteredList = characterLatex[title].filter(item =>
						(searchTerm ? item.name.includes(searchTerm) || item.symbol.includes(searchTerm) : true));

					return (
						<div key={title}>
							<DirectoryTitle
								title={title}
								onClick={handleClickMenu(title)}
								isOpen={isOpenMenu[title]}
								length={`${filteredList.length}`}
							/>
							<CharacterList
								title={title}
								isOpen={isOpenMenu[title]}
								list={filteredList}
								handleClickItem={handleClickItem}
							/>
						</div>
					);
				},
				)}
			</CharacterContainerLayout>
		</>
	);
}
