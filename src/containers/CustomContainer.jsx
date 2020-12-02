import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SideBarHeader from "../presentationals/SideBarHeader";
import CustomAddButton from "../presentationals/CustomAddButton";
import CustomForm from "../presentationals/CustomForm";
import CustomList from "../presentationals/CustomList";
import { deleteCustomCommand, setCustomCommands, setCustomFormValue } from "../slice";

export default function CustomContainer() {
	const { customCommands, customFormValue } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleFormOnButton = () => {
		dispatch(setCustomFormValue({ state: !customFormValue.state, name: "등록", command: "", latex: "" }));
	};

	const handleEditClick = (id, command) => () => {
		const target = customCommands.filter(elem => elem.command === command)[0];

		dispatch(setCustomFormValue({ state: true, name: "수정", command: target.command, latex: target.latex, id }));
	};

	const handleDeleteClick = command => () => {
		const newCustomCommands = customCommands.filter(elem => elem.command !== command);

		dispatch(deleteCustomCommand({ customFormValue, newCustomCommands }));
	};

	const handleSubmit = e => {
		e.preventDefault();
		const isExist = customCommands.find(elem => elem.command === e.target.command.value);
		const buttonName = e.target.submitBtn.innerText;

		if (buttonName === "등록") {
			if (isExist) {
				dispatch(setCustomFormValue({ ...customFormValue, isDisabled: true }));
				return;
			}
			const tempCustomCommands = [
				...customCommands,
				{ id: customCommands.length, command: e.target.command.value, latex: e.target.latex.value },
			];

			dispatch(setCustomCommands(tempCustomCommands));
		}

		if (buttonName === "수정") {
			const targetId = customFormValue.id;
			const tempCustomCommands = [...customCommands].filter(elem => elem.id !== targetId);

			if (isExist && e.target.command.value !== customCommands[targetId].command) {
				dispatch(setCustomFormValue({ ...customFormValue, isDisabled: true }));
				return;
			}
			dispatch(setCustomCommands([
				...tempCustomCommands,
				{ id: targetId, command: customFormValue.command, latex: customFormValue.latex },
			].sort((a, b) => a.id - b.id)));
		}
		dispatch(setCustomFormValue({ ...customFormValue, command: "", latex: "", id: -1, isDisabled: false }));
	};

	const onChangeInput = type => e => {
		dispatch(setCustomFormValue({ ...customFormValue, [type]: e.target.value }));
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
					onChange={onChangeInput}
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
