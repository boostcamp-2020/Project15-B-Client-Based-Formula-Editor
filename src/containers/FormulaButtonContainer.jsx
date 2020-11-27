import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSelectedButton } from "../slice";
import { latexFunction } from "../util";
import ButtonMenuLayout from "../layouts/ButtonMenuLayout";
import DropdownItems from "../presentationals/DropdownItems";
import FormulaButton from "../presentationals/FormulaButton";
import FxIcon from "../icons/FxIcon";
import AlphaIcon from "../icons/AlphaIcon";
import RootIcon from "../icons/RootIcon";

export default function FormulaButtonContainer() {
	const dispatch = useDispatch();
	const selectedButton = useSelector(state => state.selectedButton);

	const handleButtonClick = state => {
		if (state === selectedButton) return () => dispatch(setSelectedButton(""));
		return () => dispatch(setSelectedButton(state));
	};

	const handleItemClick = latex => () => {
		latexFunction.insertLatex(latex);
		dispatch(setSelectedButton(""));
	};

	const buttonsContent = [
		{ name: "연산자", onClick: handleButtonClick("연산자"), icon: <RootIcon /> },
		{ name: "문자", onClick: handleButtonClick("문자"), icon: <AlphaIcon /> },
		{ name: "수식", onClick: handleButtonClick("수식"), icon: <FxIcon /> },
	];

	const dropdownRef = useRef();

	useEffect(() => {
		const outsideClickEvent = ({ target }) => {
			const isOutsideClick = !dropdownRef.current.contains(target);

			if (isOutsideClick) {
				dispatch(setSelectedButton(""));
			}
		};

		window.addEventListener("click", outsideClickEvent);
		return () => window.removeEventListener("click", outsideClickEvent);
	});

	return (
		<ButtonMenuLayout ref={dropdownRef}>
			{buttonsContent.map(({ name, onClick, icon }, index) => (
				<div key={`D${index}`}>
					<FormulaButton
						key={`FB${index}`}
						onClick={onClick}
						isSelected={selectedButton === name}
					>{icon}</FormulaButton>
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
