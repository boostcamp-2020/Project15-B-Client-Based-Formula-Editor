import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	setCustomFormValue,
	setLatexInput,
	addBookmarkItem,
	setBookmarkItem,
	removeBookmarkItem,
	removeAllBookmarkItems,
} from "../slice";
import popup from "../popup";
import { usePreviewItem } from "../hooks";
import { CUSTOM_COMMAND_TAB } from "../constants/sidebarTab";
import CharacterContainerLayout from "../layouts/CharacterContainerLayout";
import SideTabItemLayout from "../layouts/SideTabItemLayout";
import ListItem from "../presentationals/ListItem";
import BlueButton from "../presentationals/BlueButton";
import EmptyItem from "../presentationals/EmptyItem";
import Filter from "../presentationals/Filter";
import DirectoryTitle from "../presentationals/DirectoryTitle";
import CharacterListItem from "../presentationals/CharacterListItem";

export default function BookmarkContainer({ theme, setTabState }) {
	const dispatch = useDispatch();
	const { bookmarkItems, latexInput } = useSelector(state => state);
	const [searchTerm, setSearchTerm] = useState("");
	const [previewItem, handleMouseEnterItem] = usePreviewItem({ id: "", top: 0 });

	const handleCustomButtonClick = latex => () => {
		dispatch(setCustomFormValue({ state: true, name: "등록", command: "", latex }));
		setTabState(CUSTOM_COMMAND_TAB);
	};

	const handleFormulaClick = latex => () => {
		dispatch(setLatexInput(latex));
	};

	const addCurrentLatexToBookmark = async () => {
		if (!latexInput) return;

		const answer = await popup({
			mode: "prompt",
			message: "해당 북마크의 키워드를 작성해주세요.",
		});

		if (answer) {
			dispatch(addBookmarkItem({ latex: latexInput, description: answer }));
		}
	};

	const handleDeleteButton = id => async () => {
		const answer = await popup({
			mode: "confirm",
			message: "해당 북마크를 삭제하시겠습니까?",
		});

		if (answer) {
			dispatch(removeBookmarkItem(id));
		}
	};

	const handleDeleteAllClick = async () => {
		const answer = await popup({
			mode: "confirm",
			message: "모든 북마크를 삭제하시겠습니까?",
		});

		if (answer) {
			dispatch(removeAllBookmarkItems());
		}
	};

	const handleFilter = ({ target }) => {
		const inputValue = target.value;

		if (!inputValue) {
			setSearchTerm("");
			return;
		}
		setSearchTerm(inputValue);
	};

	const handleEditButton = ({ id, description }) => async () => {
		const answer = await popup({
			mode: "prompt",
			message: "해당 북마크의 변경할 이름을 적어주세요!",
			placeholder: description,
		});

		if (answer) {
			dispatch(setBookmarkItem({ id, description: answer }));
		}
	};

	return (
		<>
			<Filter onChange={handleFilter} theme={theme} />
			<CharacterContainerLayout theme={theme}>
				<BlueButton value="현재 수식 북마크에 추가" onClick={addCurrentLatexToBookmark}/>
				<DirectoryTitle
					title="북마크 수식 목록"
					isOpen={true}
					onClickDeleteButton={handleDeleteAllClick}
					theme={theme}
				/>
				{bookmarkItems.length ?
					bookmarkItems
						.filter(item => item.description.includes(searchTerm))
						.map(item =>
							<SideTabItemLayout key={item.id}>
								<CharacterListItem
									item={{ ...item, symbol: "★", name: item.description }}
									onClick={handleFormulaClick}
									onMouseEnter={handleMouseEnterItem(item.id)}
									theme={theme}
								/>
								{previewItem.id === item.id &&
									<ListItem
										latex={item.latex}
										customOnClick={handleCustomButtonClick(item.latex)}
										intoLatexFieldOnClick={handleFormulaClick(item.latex)}
										deleteOnClick={handleDeleteButton(item.id)}
										editOnClick={handleEditButton(item)}
										top={previewItem.top}
									/>
								}
							</SideTabItemLayout>,
						) :
					<EmptyItem content="북마크 수식이 없습니다." theme={theme} />
				}
			</CharacterContainerLayout>
		</>
	);
}

