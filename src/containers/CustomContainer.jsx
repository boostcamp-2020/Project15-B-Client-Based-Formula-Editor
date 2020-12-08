import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
	setCustomCommandList,
	setCustomFormLatex,
	setCustomFormValue,
	openConfirmModal,
} from "../slice";
import { themeColor } from "../GlobalStyle";
import ListLayout from "../layouts/ListLayout";
import CustomAddButton from "../presentationals/CustomAddButton";
import BlueButton from "../presentationals/BlueButton";
import CustomForm from "../presentationals/CustomForm";
import CustomItem from "../presentationals/CustomItem";
import SideBarHeader from "../presentationals/SideBarHeader";
import EmptyItem from "../presentationals/EmptyItem";
import { CUSTOM_COMMAND_TAB } from "../constants/sidebarTab";
import CharacterContainerLayout from "../layouts/CharacterContainerLayout";
import CharacterListItem from "../presentationals/CharacterListItem";
import Filter from "../presentationals/Filter";
import DirectoryTitle from "../presentationals/DirectoryTitle";

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

export default function CustomContainer({ onScroll }) {
	const { customCommandList, customFormValue } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleFormOnButton = () => {
		dispatch(setCustomFormValue({ state: !customFormValue.state, name: "등록", command: "", latex: "" }));
	};

	const handleEditClick = index => () => {
		const target = customCommandList[index];

		dispatch(setCustomFormValue({ state: true, name: "수정", command: target.command, latex: target.latex, id: index }));
	};

	const handleDeleteClick = index => () => {
		dispatch(openConfirmModal({ tabId: CUSTOM_COMMAND_TAB, index }));
	};

	const handleSubmit = e => {
		e.preventDefault();
		const isExist = customCommandList.find(elem => elem.command === customFormValue.command);
		const buttonName = e.target.submitBtn.innerText;

		if (buttonName === "등록") {
			if (isExist) {
				dispatch(setCustomFormValue({ ...customFormValue, isDisabled: true }));
				return;
			}
			const tempCustomCommands = [
				...customCommandList,
				{ command: customFormValue.command, latex: customFormValue.latex },
			];

			dispatch(setCustomCommandList(tempCustomCommands));
		}

		if (buttonName === "수정") {
			const index = customFormValue.id;
			const tempCustomCommands = [...customCommandList];

			tempCustomCommands[index] = { command: customFormValue.command, latex: customFormValue.latex };

			if (isExist && e.target.command.value !== customCommandList[index].command) {
				dispatch(setCustomFormValue({ ...customFormValue, isDisabled: true }));
				return;
			}
			dispatch(setCustomCommandList(tempCustomCommands));
		}
		dispatch(setCustomFormValue({ state: false, command: "", latex: "", id: -1, isDisabled: false }));
	};

	const onChangeCommand = e => {
		dispatch(setCustomFormValue({ ...customFormValue, command: e.target.value }));
	};

	const onChangeLatex = mathField => {
		dispatch(setCustomFormLatex(mathField.latex()));
	};

	const handleDeleteAllClick = () => {
		if (confirm("모든 커스텀 명령어를 삭제하시겠습니까?")) {
			dispatch(setCustomCommandList([]));
		}
	};

	return (
		<>
			<Filter />
			<CharacterContainerLayout>
				<BlueButton
					value={customFormValue.state ? "취소" : "새 커스텀 추가하기"}
					onClick={handleFormOnButton}
				/>
				{customFormValue.state &&
					<CustomForm
						data={customFormValue}
						onChangeCommand={onChangeCommand}
						onChangeLatex={onChangeLatex}
						onSubmit={handleSubmit}
					/>}
				<DirectoryTitle
					title="커스텀 명령어 목록"
					isOpen={true}
					onClickDeleteButton={handleDeleteAllClick}
				/>
				{customCommandList.length ?
					customCommandList.map((item, index) =>
						<ItemLayout key={item.command}>
							<CharacterListItem
								item={{ ...item, symbol: "#", name: item.command }}
								onClick={() => {}}
							/>
							<CustomItem
								key={index}
								name={item.latex}
								onClickEdit={handleEditClick(index)}
								onClickDelete={handleDeleteClick(index)}
							/>
						</ItemLayout>,
					) :
					<EmptyItem content={"최근 저장한 명령어가 없습니다"}/>}
			</CharacterContainerLayout>
		</>
	);
}
