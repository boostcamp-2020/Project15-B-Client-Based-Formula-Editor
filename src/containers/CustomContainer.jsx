import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ListLayout from "../layouts/ListLayout";
import CustomAddButton from "../presentationals/CustomAddButton";
import CustomForm from "../presentationals/CustomForm";
import CustomItem from "../presentationals/CustomItem";
import SideBarHeader from "../presentationals/SideBarHeader";
import EmptyItem from "../presentationals/EmptyItem";
import { deleteCustomCommand, setCustomCommandList, setCustomFormLatex, setCustomFormValue } from "../slice";

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
		if (confirm("정말로 삭제하시겠습니까?")) {
			const tempCustomCommands = [...customCommandList].filter((_, id) => id !== index);

			dispatch(deleteCustomCommand({ customFormValue, tempCustomCommands }));
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

	const handleDeleteAllClick = () => {
		if (confirm("모든 커스텀 명령어를 삭제하시겠습니까?")) {
			dispatch(setCustomCommandList([]));
		}
	};

	return (
		<ListLayout onScroll={onScroll}>
			<CustomAddButton
				isFormOn={customFormValue.state}
				onClick={handleFormOnButton}
			/>
			{customFormValue.state &&
				<CustomForm
					data={customFormValue}
					onChangeCommand={onChangeCommand}
					onChangeLatex={onChangeLatex}
					onSubmit={handleSubmit}
				/>}
			<SideBarHeader
				title={"사용자 명령어 목록"}
				onClick={handleDeleteAllClick}
			/>
			{customCommandList.length ?
				customCommandList.map(({ command }, index) =>
					<CustomItem
						key={index}
						name={command}
						onClickEdit={handleEditClick(index)}
						onClickDelete={handleDeleteClick(index)}
					/>,
				) :
				<EmptyItem content={"최근 저장한 명령어가 없습니다"}/>}
		</ListLayout>
	);
}
