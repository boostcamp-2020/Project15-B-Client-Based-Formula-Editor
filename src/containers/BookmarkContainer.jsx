import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	setCustomFormValue,
	setLatexInput,
	removeBookmarkItem,
	removeAllBookmarkItems,
	openPromptModal,
} from "../slice";
import popup from "../popup";
import { BOOKMARK_TAB, CUSTOM_COMMAND_TAB } from "../constants/sidebarTab";
import CharacterContainerLayout from "../layouts/CharacterContainerLayout";
import SideTabItemLayout from "../layouts/SideTabItemLayout";
import ListItem from "../presentationals/ListItem";
import BlueButton from "../presentationals/BlueButton";
import EmptyItem from "../presentationals/EmptyItem";
import Filter from "../presentationals/Filter";
import DirectoryTitle from "../presentationals/DirectoryTitle";
import CharacterListItem from "../presentationals/CharacterListItem";

export default function BookmarkContainer({ setTabState }) {
	const dispatch = useDispatch();
	const { bookmarkItems, latexInput } = useSelector(state => state);

	const handleCustomButtonClick = latex => () => {
		dispatch(setCustomFormValue({ state: true, name: "등록", command: "", latex }));
		setTabState(CUSTOM_COMMAND_TAB);
	};

	const handleFormulaClick = latex => () => {
		dispatch(setLatexInput(latex));
	};

	const addCurrentLatexToBookmark = () => {
		if (!latexInput) return;

		dispatch(openPromptModal({ tabId: BOOKMARK_TAB, latex: latexInput }));
	};

	const handleDeleteButton = id => async () => {
		const answer = await popup({
			mode: "confirm",
			message: "해당 북마크를 삭제하시겠습니까?",
		});

		if (answer === true) {
			dispatch(removeBookmarkItem(id));
		}
	};

	const handleDeleteAllClick = async () => {
		const answer = await popup({
			mode: "confirm",
			message: "모든 북마크를 삭제하시겠습니까?",
		});

		if (answer === true) {
			dispatch(removeAllBookmarkItems());
		}
	};

	return (
		<>
			<Filter />
			<CharacterContainerLayout>
				<BlueButton value="현재 수식 북마크에 추가" onClick={addCurrentLatexToBookmark}/>
				<DirectoryTitle
					title="북마크 수식 목록"
					isOpen={true}
					onClickDeleteButton={handleDeleteAllClick}
				/>
				{bookmarkItems.length ?
					bookmarkItems.map(item =>
						<SideTabItemLayout key={item.id}>
							<CharacterListItem
								item={{ ...item, symbol: "★", name: item.description }}
								onClick={handleFormulaClick}
							/>
							<ListItem
								key={item.id}
								latex={item.latex}
								customOnClick={handleCustomButtonClick(item.latex)}
								intoLatexFieldOnClick={handleFormulaClick(item.latex)}
								deleteOnClick={handleDeleteButton(item.id)}
							/>
						</SideTabItemLayout>,
					) :
					<EmptyItem content="북마크 수식이 없습니다."/>
				}
			</CharacterContainerLayout>
		</>
	);
}

