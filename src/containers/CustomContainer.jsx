import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	setCustomCommandList,
	setCustomFormLatex,
	setCustomFormValue,
	removeCustomCommand,
} from "../slice";
import popup from "../popup";
import { CUSTOM_COMMAND_TAB } from "../constants/sidebarTab";
import CharacterContainerLayout from "../layouts/CharacterContainerLayout";
import SideTabItemLayout from "../layouts/SideTabItemLayout";
import BlueButton from "../presentationals/BlueButton";
import CustomForm from "../presentationals/CustomForm";
import CustomItem from "../presentationals/CustomItem";
import EmptyItem from "../presentationals/EmptyItem";
import CharacterListItem from "../presentationals/CharacterListItem";
import Filter from "../presentationals/Filter";
import DirectoryTitle from "../presentationals/DirectoryTitle";

export default function CustomContainer() {
	const { customCommandList, customFormValue } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleFormOnButton = () => {
		dispatch(setCustomFormValue({ state: !customFormValue.state, name: "등록", command: "", latex: "" }));
	};

	const handleEditClick = index => () => {
		const target = customCommandList[index];

		dispatch(setCustomFormValue({ state: true, name: "수정", command: target.command, latex: target.latex, id: index }));
	};

	const handleDeleteClick = index => async () => {
		const answer = await popup({
			mode: "confirm",
			message: "해당 커스텀 명령어를 삭제하시겠습니까?",
		});

		if (answer === true) {
			dispatch(removeCustomCommand(index));
		}
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

	const handleDeleteAllClick = async () => {
		const answer = await popup({
			mode: "confirm",
			message: "모든 커스텀 명령어를 삭제하시겠습니까?",
		});

		if (answer === true) {
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
						<SideTabItemLayout key={item.command}>
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
						</SideTabItemLayout>,
					) :
					<EmptyItem content={"최근 저장한 명령어가 없습니다"}/>}
			</CharacterContainerLayout>
		</>
	);
}
