import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SideBarHeader from "../presentationals/SideBarHeader";
import CustomAddButton from "../presentationals/CustomAddButton";
import CustomForm from "../presentationals/CustomForm";
import CustomList from "../presentationals/CustomList";
import { deleteCustomCommand, setCustomCommands, setCustomFormLatex, setCustomFormValue } from "../slice";

export default function CustomContainer() {
	const { customCommands, customFormValue } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleFormOnButton = () => {
		dispatch(setCustomFormValue({ state: !customFormValue.state, name: "등록", command: "", latex: "" }));
	};

	const handleEditClick = index => () => {
		const target = customCommands[index];

		dispatch(setCustomFormValue({ state: true, name: "수정", command: target.command, latex: target.latex, id: index }));
	};

	const handleDeleteClick = index => () => {
		const newCustomCommands = [...customCommands].splice(index, 1);

		dispatch(deleteCustomCommand({ customFormValue, newCustomCommands }));
	};

	const handleSubmit = e => {
		e.preventDefault();
		const isExist = customCommands.find(elem => elem.command === customFormValue.command);
		const buttonName = e.target.submitBtn.innerText;

		if (buttonName === "등록") {
			if (isExist) {
				dispatch(setCustomFormValue({ ...customFormValue, isDisabled: true }));
				return;
			}
			const tempCustomCommands = [
				...customCommands,
				{ command: customFormValue.command, latex: customFormValue.latex },
			];

			dispatch(setCustomCommands(tempCustomCommands));
		}

		if (buttonName === "수정") {
			const index = customFormValue.id;
			const tempCustomCommands = [...customCommands];

			tempCustomCommands[index] = { command: customFormValue.command, latex: customFormValue.latex };

			if (isExist && e.target.command.value !== customCommands[index].command) {
				dispatch(setCustomFormValue({ ...customFormValue, isDisabled: true }));
				return;
			}
			dispatch(setCustomCommands(tempCustomCommands));
		}
		dispatch(setCustomFormValue({ state: false, command: "", latex: "", id: -1, isDisabled: false }));
	};

	const onChangeCommand = e => {
		dispatch(setCustomFormValue({ ...customFormValue, command: e.target.value }));
	};

	const onChangeLatex = mathField => {
		dispatch(setCustomFormLatex(mathField.latex()));
	};

	return (
		<div>
			<SideBarHeader title={"사용자 명령어 목록"} />
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
			<CustomList
				customs={customCommands}
				onClickEdit={handleEditClick}
				onClickDelete={handleDeleteClick}
			/>
		</div>
	);
}
