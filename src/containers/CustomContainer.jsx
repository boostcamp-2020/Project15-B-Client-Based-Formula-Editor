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

	const handleEditClick = name => () => {
		const target = customCommands.filter(elem => elem.command === name)[0];

		dispatch(setCustomFormValue({ state: true, name: "수정", command: target.command, latex: target.latex }));
	};

	const handleSubmit = e => {
		e.preventDefault();
		const tempCustom = [
			...customCommands,
			{ id: customCommands.length, command: e.target.command.value, latex: e.target.latex.value },
		];

		dispatch(setCustomCommands(tempCustom));
		e.target.command.value = "";
		e.target.latex.value = "";
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
					onSubmit={handleSubmit}
					buttonName={customFormValue.name} />}
			<CustomList
				customs={customCommands}
				onClickEdit={handleEditClick}
			/>
		</div>
	);
}
