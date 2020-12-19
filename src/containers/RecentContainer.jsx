import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	setLatexInput,
	setCustomFormValue,
	removeRecentItem,
	removeAllRecentItems,
	setBookmarkItem,
} from "../slice";
import popup from "../popup";
import { usePreviewItem } from "../hooks";
import { CUSTOM_COMMAND_TAB } from "../constants/sidebarTab";
import CharacterContainerLayout from "../layouts/CharacterContainerLayout";
import SideTabItemLayout from "../layouts/SideTabItemLayout";
import ListItem from "../presentationals/ListItem";
import EmptyItem from "../presentationals/EmptyItem";
import CharacterListItem from "../presentationals/CharacterListItem";
import Filter from "../presentationals/Filter";
import DirectoryTitle from "../presentationals/DirectoryTitle";

export default function RecentContainer({ theme, setTabState }) {
	const dispatch = useDispatch();
	const { recentItems } = useSelector(state => state);
	const [searchTerm, setSearchTerm] = useState("");
	const [previewItem, handleMouseEnterItem] = usePreviewItem({ id: "", top: 0 });

	const handleBookmarkButtonClick = (id, isBookmark, latex) => async () => {
		if (isBookmark) {
			dispatch(setBookmarkItem({ id, isBookmark: false }));
			return;
		}

		const answer = await popup({
			mode: "prompt",
			message: "해당 북마크의 키워드를 작성해주세요.",
		});

		if (answer) {
			dispatch(setBookmarkItem({ id, isBookmark: true, description: answer }));
		}
	};

	const handleCustomButtonClick = latex => () => {
		dispatch(setCustomFormValue({ state: true, name: "등록", command: "", latex }));
		setTabState(CUSTOM_COMMAND_TAB);
	};

	const handleDeleteButtonClick = id => async () => {
		const answer = await popup({
			mode: "confirm",
			message: "해당 수식을 삭제하시겠습니까?",
		});

		if (answer) {
			dispatch(removeRecentItem(id));
		}
	};

	const handleFormulaClick = latex => () => {
		dispatch(setLatexInput(latex));
	};

	const handleDeleteAllClick = async () => {
		const answer = await popup({
			mode: "confirm",
			message: "모든 최근 수식을 삭제하시겠습니까?",
		});

		if (answer) {
			dispatch(removeAllRecentItems());
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

	return (
		<>
			<Filter onChange={handleFilter} theme={theme} />
			<CharacterContainerLayout theme={theme}>
				<DirectoryTitle
					title="최근 수식 목록"
					isOpen={true}
					onClickDeleteButton={handleDeleteAllClick}
					theme={theme}
				/>
				{recentItems.length ?
					recentItems
						.filter(item => item.date.includes(searchTerm))
						.map(item =>
							<SideTabItemLayout key={item.id}>
								<CharacterListItem
									item={{ ...item, symbol: "Σ", name: item.date }}
									onClick={handleFormulaClick}
									onMouseEnter={handleMouseEnterItem(item.id)}
									theme={theme}
								/>
								{previewItem.id === item.id &&
									<ListItem
										latex={item.latex}
										bookmarkOnClick={handleBookmarkButtonClick(item.id, item.isBookmark)}
										customOnClick={handleCustomButtonClick(item.latex)}
										deleteOnClick={handleDeleteButtonClick(item.id)}
										intoLatexFieldOnClick={handleFormulaClick(item.latex)}
										isBookmark={item.isBookmark}
										top={previewItem.top}
										theme={theme}
									/>
								}
							</SideTabItemLayout>,
						) :
					<EmptyItem content={"최근 저장한 수식이 없습니다"} theme={theme} />}
			</CharacterContainerLayout>
		</>
	);
}

