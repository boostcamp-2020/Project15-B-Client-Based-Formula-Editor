import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { redoEvent, undoEvent, resetEvent } from "../slice";
import ControlContainerLayout from "../layouts/ControlContainerLayout";
import IconButton from "../presentationals/IconButton";
import UndoIcon from "../icons/UndoIcon";
import RedoIcon from "../icons/RedoIcon";
import ResetIcon from "../icons/ResetIcon";

function ControlButtonContainer() {
	const dispatch = useDispatch();
	const theme = useSelector(state => state.theme);

	const handleControl = action => () => dispatch(action());

	return (
		<ControlContainerLayout theme={theme}>
			<IconButton onClick={handleControl(undoEvent)} icon={<UndoIcon/>} isHover={true} />
			<IconButton onClick={handleControl(redoEvent)} icon={<RedoIcon/>} isHover={true} />
			<IconButton onClick={handleControl(resetEvent)} icon={<ResetIcon/>} isHover={true} />
		</ControlContainerLayout>
	);
}

export default React.memo(ControlButtonContainer);
