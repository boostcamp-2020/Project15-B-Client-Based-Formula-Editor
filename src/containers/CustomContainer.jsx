import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SideBarHeader from "../presentationals/SideBarHeader";
import CustomAddButton from "../presentationals/CustomAddButton";
import CustomForm from "../presentationals/CustomForm";
import CustomList from "../presentationals/CustomList";
import { setCustomCommands, setCustomFormValue } from "../slice";

export default function CustomContainer() {
	const { customCommands, customFormValue } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleFormOnButton = () => {
		dispatch(setCustomFormValue({ state: !customFormValue.state, name: "등록", command: "", latex: "" }));
	};

	const handleEditClick = (id, name) => () => {
		const target = customCommands.filter(elem => elem.command === name)[0];

		dispatch(setCustomFormValue({ state: true, name: "수정", command: target.command, latex: target.latex, id }));
	};

	const handleDeleteClick = name => () => {
		const newCustomCommands = customCommands.filter(elem => elem.command !== name);

		dispatch(setCustomCommands(newCustomCommands));
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (e.target.innerText === "등록") {
			const tempCustomCommands = [
			...customCommands,
			{ id: customCommands.length, command: e.target.command.value, latex: e.target.latex.value },
		];

			dispatch(setCustomCommands(tempCustomCommands));
		}

		if (e.target.innerText === "수정") {
			const targetId = customFormValue.id;
			const tempCustomCommands = [...customCommands].filter(elem => elem.id !== targetId);

			dispatch(setCustomCommands([
				...tempCustomCommands,
				{ id: targetId, command: customFormValue.command, latex: customFormValue.latex },
			].sort((a, b) => a.id - b.id)));
		}
		dispatch(setCustomFormValue({ ...customFormValue, command: "", latex: "", id: -1 }));
	};

	const onChangeInput = type => e => {
		if (type === "command") {
			dispatch(setCustomFormValue({ ...customFormValue, command: e.target.value }));
		}
		if (type === "latex") {
			dispatch(setCustomFormValue({ ...customFormValue, latex: e.target.value }));
		}
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
					onSubmit={handleSubmit}
					onChange={onChangeInput}
					buttonName={customFormValue.name} />}
			<CustomList
				customs={customCommands}
				onClickEdit={handleEditClick}
				onClickDelete={handleDeleteClick}
			/>
		</div>
	);
}
