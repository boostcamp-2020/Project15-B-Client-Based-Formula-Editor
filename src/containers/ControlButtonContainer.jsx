import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPastLatexCommands, setPresentLatexCommand, setFutureLatexCommands } from "../slice";
import EditTabHeaderButton from "../presentationals/EditTabHeaderButton";

export default function ControlButtonContainer(params) {
	const dispatch = useDispatch();
	const pastLatexCommands = useSelector(state => state.pastLatexCommands);
	const presentLatexCommand = useSelector(state => state.presentLatexCommand);
	const futureLatexCommands = useSelector(state => state.futureLatexCommands);

	const handleUndoButton = () => {
		if (pastLatexCommands.length === 0) return;
		const previousLatexCommand = pastLatexCommands[0];
		const newPast = pastLatexCommands.slice(1);
		const newFuture = [presentLatexCommand, ...futureLatexCommands];

		dispatch(setFutureLatexCommands(newFuture));
		dispatch(setPresentLatexCommand(previousLatexCommand));
		dispatch(setPastLatexCommands(newPast));
	};

	const handleRedoButton = () => {
		if (futureLatexCommands.Length === 0) return;
		const followingLatexCommand = futureLatexCommands[0];
		const newFuture = futureLatexCommands.slice(1);
		const newPast = [presentLatexCommand, ...pastLatexCommands];

		dispatch(setFutureLatexCommands(newFuture));
		dispatch(setPresentLatexCommand(followingLatexCommand));
		dispatch(setPastLatexCommands(newPast));
	};

	const handleResetButton = () => {
		const newPast = [presentLatexCommand, ...pastLatexCommands];

		dispatch(setPastLatexCommands(newPast));
		dispatch(setPresentLatexCommand(""));
	};

	return (
		<div>
			<EditTabHeaderButton onClick={handleUndoButton} />
			<EditTabHeaderButton onClick={handleRedoButton} />
			<EditTabHeaderButton onClick={handleResetButton} />
		</div>
	);
}
