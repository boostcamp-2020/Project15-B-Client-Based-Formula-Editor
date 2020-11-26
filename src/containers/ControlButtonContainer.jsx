import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setControlLatexCommand } from "../slice";
import EditTabHeaderButton from "../presentationals/EditTabHeaderButton";

export default function ControlButtonContainer(params) {
	const dispatch = useDispatch();
	const {
		pastLatexCommands,
		presentLatexCommand,
		futureLatexCommands,
	} = useSelector(state => state);

	const handleUndoButton = () => {
		if (pastLatexCommands.length === 0) return;
		const newState = {
			pastLatexCommands: pastLatexCommands.slice(1),
			presentLatexCommand: pastLatexCommands[0],
			futureLatexCommands: [presentLatexCommand, ...futureLatexCommands],
		};

		dispatch(setControlLatexCommand(newState));
	};

	const handleRedoButton = () => {
		if (futureLatexCommands.Length === 0) return;
		const newState = {
			pastLatexCommands: [presentLatexCommand, ...pastLatexCommands],
			presentLatexCommand: futureLatexCommands[0],
			futureLatexCommands: futureLatexCommands.slice(1),
		};

		dispatch(setControlLatexCommand(newState));
	};

	const handleResetButton = () => {
		const newState = {
			pastLatexCommands: [presentLatexCommand, ...pastLatexCommands],
			presentLatexCommand: "",
		};

		dispatch(setControlLatexCommand(newState));
	};

	return (
		<div>
			<EditTabHeaderButton onClick={handleUndoButton} />
			<EditTabHeaderButton onClick={handleRedoButton} />
			<EditTabHeaderButton onClick={handleResetButton} />
		</div>
	);
}
