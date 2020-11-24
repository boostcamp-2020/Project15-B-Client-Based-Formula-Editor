import React, { useState } from "react";

import CustomAddButton from "../presentationals/CustomAddButton";
import CustomForm from "../presentationals/CustomForm";
import CustomList from "../presentationals/CustomList";

export default function CustomContainer() {
	const [isFormOn, toggleIsFormOn] = useState({ state: false, name: "등록" });

	const handleFormOnButton = () => {
		toggleIsFormOn({ state: !isFormOn.state, name: "등록" });
	};

	const customs = [{ id: 0, name: "\\cmx" }, { id: 1, name: "\\lll" }, { id: 2, name: "\\ggg" }, { id: 3, name: "\\ccc" }];

	const handleCustomItemClick = () => {
		toggleIsFormOn({ state: true, name: "수정" });
	};

	return (
		<div>
			<CustomAddButton
				isFormOn={isFormOn.state}
				onClick={handleFormOnButton}
			/>
			{isFormOn.state && <CustomForm buttonName={isFormOn.name} />}
			<CustomList
				customs={customs}
				onClickItem={handleCustomItemClick}
			/>
		</div>
	);
}
