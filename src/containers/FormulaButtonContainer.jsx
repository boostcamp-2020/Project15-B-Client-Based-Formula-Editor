/* eslint-disable array-element-newline */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSelectedButton } from "../slice";
import DropdownItems from "../presentationals/DropdownItems";
import ButtonMenuLayout from "../layouts/ButtonMenuLayout";
import FormulaButton from "../presentationals/FormulaButton";

export default function FormulaButtonContainer() {
	const dispatch = useDispatch();
	const selectedButton = useSelector(state => state.selectedButton);

	const handleButtonClick = state => {
		if (state === selectedButton) return () => dispatch(setSelectedButton(""));
		return () => dispatch(setSelectedButton(state));
	};

	const buttonsContent = [
		{ name: "연산자", onClick: handleButtonClick("연산자") },
		{ name: "문자", onClick: handleButtonClick("문자") },
		{ name: "수식", onClick: handleButtonClick("수식") },
	];

	const handleItemClick = latex => () => {
		// mathField.write(latex);
	};

	return (
		<ButtonMenuLayout>
			{buttonsContent.map(({ name, onClick }, index) => (
				<div key={`D${index}`}>
					<FormulaButton
						key={`FB${index}`}
						name={name}
						onClick={onClick}
					/>
					{name === selectedButton && (
						<DropdownItems
							key={`FDC${index}`}
							name={name}
							onItemClick={handleItemClick}
						/>
					)}
				</div>
			))}
		</ButtonMenuLayout>
	);
}
