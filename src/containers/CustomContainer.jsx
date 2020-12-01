import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SideBarHeader from "../presentationals/SideBarHeader";
import CustomAddButton from "../presentationals/CustomAddButton";
import CustomForm from "../presentationals/CustomForm";
import CustomList from "../presentationals/CustomList";
import { setCustomCommands } from "../slice";

export default function CustomContainer() {
	const [isFormOn, toggleIsFormOn] = useState({ state: false, name: "등록" });
	const customs = useSelector(state => state.customCommands);
	const dispatch = useDispatch();

	const handleFormOnButton = () => {
		toggleIsFormOn({ state: !isFormOn.state, name: "등록" });
	};


	const handleCustomItemClick = () => {
		toggleIsFormOn({ state: true, name: "수정" });
	};

	const handleSubmit = e => {
		e.preventDefault();
		const tempCustom = [
			...customs,
			{ id: customs.length, command: e.target.command.value, latex: e.target.latex.value },
		];

		dispatch(setCustomCommands(tempCustom));
	};

	return (
		<div>
			<SideBarHeader title={"사용자 명령어 목록"} />
			<CustomAddButton
				isFormOn={isFormOn.state}
				onClick={handleFormOnButton}
			/>
			{isFormOn.state && <CustomForm onSubmit={handleSubmit} buttonName={isFormOn.name} />}
			<CustomList
				customs={customs}
				onClickItem={handleCustomItemClick}
			/>
		</div>
	);
}
