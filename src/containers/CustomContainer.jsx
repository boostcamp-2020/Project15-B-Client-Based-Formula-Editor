import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	setCustomCommandList,
	setCustomFormLatex,
	setCustomFormValue,
	removeCustomCommand,
} from "../slice";
import popup from "../popup";
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
		dispatch(setCustomFormValue({ state: !customFormValue.state, name: "등록", command: "", latex: "", description: "" }));
	};

	const handleEditClick = index => () => {
		const target = customCommandList[index];

		dispatch(setCustomFormValue({ state: true, name: "수정", command: target.command, latex: target.latex, description: target.description, id: index }));
	};

	const handleDeleteClick = index => async () => {
		const answer = await popup({
			mode: "confirm",
			message: "해당 커스텀 명령어를 삭제하시겠습니까?",
		});

		if (answer) {
			dispatch(removeCustomCommand(index));
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		const tempCustomCommandList = [...customCommandList];
		const isExist = customCommandList.find(elem => elem.command === customFormValue.command);
		const buttonName = e.target.submitBtn.innerText;
		const index = customFormValue.id;

		if (buttonName === "등록") {
			if (isExist) {
				dispatch(setCustomFormValue({ ...customFormValue, isDisabled: true }));
				return;
			}
			tempCustomCommandList.push({
				command: customFormValue.command,
				latex: customFormValue.latex,
				description: customFormValue.description,
			});
		}

		if (buttonName === "수정") {
			if (isExist && e.target.command.value !== customCommandList[index].command) {
				dispatch(setCustomFormValue({ ...customFormValue, isDisabled: true }));
				return;
			}
			tempCustomCommandList[index] =
			{
				command: customFormValue.command,
				latex: customFormValue.latex,
				description: customFormValue.description,
			};
		}

		dispatch(setCustomCommandList(tempCustomCommandList));
		dispatch(setCustomFormValue({ state: false, command: "", latex: "", id: -1, isDisabled: false }));
	};

	const onChangeCommand = e => {
		dispatch(setCustomFormValue({ ...customFormValue, command: e.target.value }));
	};

	const onChangeLatex = mathField => {
		dispatch(setCustomFormLatex(mathField.latex()));
	};

	const onChangeDescription = e => {
		dispatch(setCustomFormValue({ ...customFormValue, description: e.target.value }));
	};

	const handleDeleteAllClick = async () => {
		const answer = await popup({
			mode: "confirm",
			message: "모든 커스텀 명령어를 삭제하시겠습니까?",
		});

		if (answer) {
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
						onChangeDescription={onChangeDescription}
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
								onClick={() => { }}
							/>
							<CustomItem
								key={index}
								name={item.latex}
								onClickEdit={handleEditClick(index)}
								onClickDelete={handleDeleteClick(index)}
							/>
						</SideTabItemLayout>,
					) :
					<EmptyItem content={"최근 저장한 명령어가 없습니다"} />}
			</CharacterContainerLayout>
		</>
	);
}
