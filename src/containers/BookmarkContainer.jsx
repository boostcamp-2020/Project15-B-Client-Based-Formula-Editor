import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
	addBookmarkItem,
	setCustomFormValue,
	setLatexInput,
	removeAllBookmarkItems,
	openConfirmModal,
} from "../slice";
import { BOOKMARK_TAB, CUSTOM_COMMAND_TAB } from "../constants/sidebarTab";
import CharacterContainerLayout from "../layouts/CharacterContainerLayout";
import ListItem from "../presentationals/ListItem";
import SideBarHeader from "../presentationals/SideBarHeader";
import BookmarkAddButton from "../presentationals/BookmarkAddButton";
import BlueButton from "../presentationals/BlueButton";
import EmptyItem from "../presentationals/EmptyItem";
import Filter from "../presentationals/Filter";
import DirectoryTitle from "../presentationals/DirectoryTitle";
import CharacterListItem from "../presentationals/CharacterListItem";

const ItemLayout = styled.div`
	&:hover {
		> div:last-child {
			display: block;
    	width: 250px;
    	position: fixed;
    	left: 270px;
	    transform: translate(0, -30px);
			color: black;
		}
	}
	
	> div:last-child {
		display: none;
	}
`;

export default function BookmarkContainer({ onScroll, setTabState }) {
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
		dispatch(addBookmarkItem(latexInput));
	};

	const handleDeleteButton = id => () => {
		dispatch(openConfirmModal({ tabId: BOOKMARK_TAB, id }));
	};

	const handleDeleteAllClick = () => {
		if (confirm("모든 북마크를 삭제하시겠습니까?")) {
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
						<ItemLayout key={item.id}>
							<CharacterListItem
								item={{ ...item, symbol: "★", name: item.date }}
								onClick={handleFormulaClick}
							/>
							<ListItem
								key={item.id}
								latex={item.latex}
								customOnClick={handleCustomButtonClick(item.latex)}
								intoLatexFieldOnClick={handleFormulaClick(item.latex)}
								deleteOnClick={handleDeleteButton(item.id)}
							/>
						</ItemLayout>,
					) :
					<EmptyItem content="북마크 수식이 없습니다."/>
				}
			</CharacterContainerLayout>
		</>
	);
}

