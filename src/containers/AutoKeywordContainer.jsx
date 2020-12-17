import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setLatexInput, setLatexTextInput, setBuffer } from "../slice";
import { latexFunction, getBackslashCountFromLatex, sortFunction } from "../util";
import KEY_CODE from "../constants/keyCode";
import mathquillLatex from "../constants/mathquillLatex";
import AutoComplete from "../presentationals/AutoComplete";

export default function AutoKeywordContainer() {
	const dispatch = useDispatch();
	const cursorPosition = useSelector(state => state.cursorPosition);
	const fontInfo = useSelector(state => state.fontInfo);
	const latexInput = useSelector(state => state.latexInput);
	const customCommandList = useSelector(state => state.customCommandList);
	const [isOpen, toggleIsOpen] = useState(false);
	const [itemIndex, setItemIndex] = useState(0);
	const [backslashCount, setBackslashCount] = useState(0);
	const [recommandationList, setRecommandationList] = useState([]);
	const buffer = useRef([]);
	const secondBuffer = useRef([]);
	const MAX_LENGTH = 7;

	const getBufferToString = () => buffer.current.join("").trim();

	const updateList = () => {
		const temp = getBufferToString();
		const list = mathquillLatex.filter(elem => elem.includes(`\\${temp}`));

		const regex = new RegExp(`^(${temp})`);
		const customList = customCommandList.filter(elem => elem.command.match(regex));

		const combinedList = [...list, ...customList].sort(sortFunction);

		if (combinedList.length > MAX_LENGTH) combinedList.length = MAX_LENGTH;
		setRecommandationList(combinedList);
	};

	const keyupEvent = ({ keyCode }) => {
		if (keyCode === KEY_CODE.BACK_SLASH) {
			const cursor = latexFunction.getCursor();

			if (cursor.parent.jQ[0].className.includes("text-mode")) {
				return;
			}
			const backslashCountInLatex = getBackslashCountFromLatex(latexInput);

			setBackslashCount(backslashCountInLatex);
			updateList();
			toggleIsOpen(!isOpen);
		}

		if (!isOpen) return;

		const bufferShift = (fromBuffer, toBuffer) => {
			const item = fromBuffer.current.pop();

			if (item) {
				toBuffer.current.push(item);
				dispatch(setBuffer([...buffer.current]));
				updateList();
			}
		};

		if (keyCode === KEY_CODE.LEFT) {
			bufferShift(buffer, secondBuffer);
		}
		if (keyCode === KEY_CODE.RIGHT) {
			bufferShift(secondBuffer, buffer);
		}
	};

	const selectAutoCompleteItem = isClicked => {
		const target = recommandationList[itemIndex];

		const temp = getBufferToString();
		const targetItem = target.latex ? target.latex : target;

		const isInMathquillLatex = mathquillLatex.includes(targetItem);

		if (isInMathquillLatex) {
			const remainedLatexPart = targetItem.replace(`\\${temp}`, "");

			isClicked ?
				latexFunction.insertClickedLatex(remainedLatexPart) :
				latexFunction.insertLatex(remainedLatexPart || "");
		} else {
			const remainedLatexPart = targetItem.replace(`\\`, "");

			while (buffer.current.pop()) {
				latexFunction.keystroke("Shift-Left Del");
			}
			latexFunction.keystroke("Shift-Left Del");
			const isStartWithBackSlash = targetItem[0] === "\\";

			latexFunction.insertLatex(isStartWithBackSlash ? `\\${remainedLatexPart}` : remainedLatexPart);
		}

		setRecommandationList([]);
		buffer.current = [];
		dispatch(setBuffer([]));
		toggleIsOpen(false);
		setItemIndex(0);
	};

	const keydownEvent = ({ keyCode }) => {
		if (itemIndex > 0) {
			setItemIndex(0);
		}

		const isRemoveKey = key => key === KEY_CODE.BACK_SPACE || key === KEY_CODE.DELETE;

		if (!isOpen && isRemoveKey(keyCode)) {
			const backslashCountInLatex = getBackslashCountFromLatex(latexInput);

			if (backslashCountInLatex !== backslashCount) {
				setBackslashCount(backslashCountInLatex);
			}
		}

		if (!isOpen) return;

		if (isRemoveKey(keyCode)) {
			if (latexInput === "\\ " && buffer.current.length === 0) {
				toggleIsOpen(false);
				setRecommandationList([]);
				setBackslashCount(0);
				dispatch(setLatexInput(""));
				dispatch(setLatexTextInput(""));
			}

			const backslashCountInLatex = getBackslashCountFromLatex(latexInput);

			buffer.current.pop();
			dispatch(setBuffer([...buffer.current]));

			updateList();

			if (backslashCountInLatex !== backslashCount) {
				setBackslashCount(backslashCountInLatex);
				toggleIsOpen(false);
			}
		}

		if (keyCode === KEY_CODE.DOWN) {
			const nextIndex = (itemIndex + 1) % recommandationList.length;

			setItemIndex(nextIndex);
			return;
		}

		if (keyCode === KEY_CODE.UP) {
			const prevIndex = (itemIndex - 1) < 0 ? recommandationList.length - 1 : itemIndex - 1;

			setItemIndex(prevIndex);
			return;
		}

		if (keyCode === KEY_CODE.ENTER || keyCode === KEY_CODE.SPACE || keyCode === KEY_CODE.TAB) {
			while (secondBuffer.current.pop()) {
				latexFunction.keystroke("Shift-Right Del");
			}
			selectAutoCompleteItem(false);
		}
	};

	const keypressEvent = ({ keyCode }) => {
		if (!isOpen) return;

		const alphabet = String.fromCharCode(keyCode);

		buffer.current.push(alphabet);
		dispatch(setBuffer([...buffer.current]));
		updateList();
	};

	const onClick = () => {
		selectAutoCompleteItem(true);
	};

	const onMouseEnter = e => {
		setItemIndex(e.target.dataset.id);
	};

	useEffect(() => {
		const rootBlock = document.querySelector(".mq-textarea");

		rootBlock?.addEventListener("keypress", keypressEvent);
		rootBlock?.addEventListener("keydown", keydownEvent);
		rootBlock?.addEventListener("keyup", keyupEvent);

		return () => {
			rootBlock?.removeEventListener("keypress", keypressEvent);
			rootBlock?.removeEventListener("keydown", keydownEvent);
			rootBlock?.removeEventListener("keyup", keyupEvent);
		};
	});

	return (
		<AutoComplete
			isOpen={isOpen}
			x={cursorPosition.x}
			y={cursorPosition.y}
			fontSize={fontInfo.size}
			recommandationList={recommandationList}
			targetIndex={itemIndex}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
		/>
	);
}
