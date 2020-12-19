import React, { useState, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCharacterTabState } from "../slice";
import { latexFunction } from "../util";
import { usePreviewItem } from "../hooks";
import characterLatex from "../constants/characterLatex";
import CharacterContainerLayout from "../layouts/CharacterContainerLayout";
import CharacterList from "../presentationals/CharacterList";
import DirectoryTitle from "../presentationals/DirectoryTitle";
import Filter from "../presentationals/Filter";

function CharacterContainer({ theme }) {
	const dispatch = useDispatch();
	const isOpenMenu = useSelector(state => state.characterTabState);
	const [searchTerm, setSearchTerm] = useState("");
	const [previewItem, handleMouseEnterItem] = usePreviewItem({ id: "", top: 0 });
	const titles = Object.keys(isOpenMenu);

	const handleClickItem = useCallback(latex => () => {
		latexFunction.insertLatex(latex);
	}, []);

	const handleClickMenu = title => useCallback(() => {
		dispatch(setCharacterTabState(title));
	}, []);

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

	const getFilteredList = title => characterLatex[title].filter(item =>
		(searchTerm ? item.name.includes(searchTerm) || item.symbol.includes(searchTerm) : true));

	return (
		<>
			<Filter onChange={handleFilter}/>
			<CharacterContainerLayout theme={theme}>
				{titles.map(title => {
					const filteredList = useMemo(() => getFilteredList(title), [title]);

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
								handleMouseEnterItem={handleMouseEnterItem}
								previewItem={previewItem}
							/>
						</div>
					);
				},
				)}
			</CharacterContainerLayout>
		</>
	);
}

export default React.memo(CharacterContainer);
