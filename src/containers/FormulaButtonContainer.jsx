/* eslint-disable array-element-newline */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSelectedButton } from "../slice";
import FormulaDropdownContainer from "../containers/FormulaDropdownContainer";
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

	return (
		<ButtonMenuLayout>
			{buttonsContent.map((elem, index) => (
				<div key={`D${index}`}>
					<FormulaButton key={`FB${index}`} name={elem.name} onClick={elem.onClick} />
					{elem.name === selectedButton && <FormulaDropdownContainer key={`FDC${index}`} name={elem.name} />}
				</div>
			))}
		</ButtonMenuLayout>
	);
}
