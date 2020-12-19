import React, { useState, useEffect, useRef, useCallback } from "react";
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
	const [recommandationList, setRecommandationList] = useState([]);
	const [backslashCount, setBackslashCount] = useState(0);
	const buffer = useRef([]);
	const secondBuffer = useRef([]);
	const [pageCount, setPageCount] = useState(0);
	const [currentPageNumber, setCurrentPageNumber] = useState(0);
	const [currentPageList, setCurrentPageList] = useState([]);
	const MAX_LENGTH = 7;
	const FIRST_PAGE_NUMBER = 1;

	const getBufferToString = () => buffer.current.join("").trim();
	const cleanUp = () => {
		setRecommandationList([]);
		buffer.current = [];
		dispatch(setBuffer([]));
		toggleIsOpen(false);
		setItemIndex(0);
	};

	const updateList = () => {
		const temp = getBufferToString();
		const list = mathquillLatex.filter(elem => elem.includes(`\\${temp}`));
		const regex = new RegExp(`^(${temp})`);

		const customList = customCommandList.filter(elem => elem.command.match(regex));

		const combinedList = [...list, ...customList].sort(sortFunction);

		setRecommandationList(combinedList);
		setPageCount(Math.ceil(combinedList.length / MAX_LENGTH));
		setCurrentPageList(combinedList.slice(0, MAX_LENGTH));
		setCurrentPageNumber(FIRST_PAGE_NUMBER);
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
		const target = currentPageList[itemIndex];

		const temp = getBufferToString();

		if (!target) {
			cleanUp();
			return;
		}
		const targetItem = target.latex ? target.latex : target;

		const isInMathquillLatex = mathquillLatex.includes(targetItem);

		if (isInMathquillLatex) {
			const remainedLatexPart = targetItem.replace(`\\${temp}`, "");

			isClicked ?
				latexFunction.insertClickedLatex(remainedLatexPart) :
				latexFunction.insertLatex(remainedLatexPart || "");
		} else {
			while (buffer.current.pop()) {
				latexFunction.keystroke("Shift-Left Del");
			}
			latexFunction.keystroke("Shift-Left Del");

			latexFunction.insertLatex(targetItem);
		}
		cleanUp();
	};

	const keydownEvent = ({ keyCode }) => {
		if (isOpen && (keyCode >= 48 && keyCode <= 57)) {
			cleanUp();
			return;
		}

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
				cleanUp();
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
			if (itemIndex + 1 !== currentPageList.length) {
				setItemIndex(itemIndex + 1);
				return;
			}

			if (currentPageNumber < pageCount) {
				const start = currentPageNumber * MAX_LENGTH;

				setCurrentPageList(recommandationList.slice(start, start + MAX_LENGTH));
				setCurrentPageNumber(currentPageNumber + 1);
				setItemIndex(0);
				return;
			}

			setCurrentPageList(recommandationList.slice(0, MAX_LENGTH));
			setCurrentPageNumber(FIRST_PAGE_NUMBER);
			setItemIndex(0);
			return;
		}

		if (keyCode === KEY_CODE.UP) {
			if (itemIndex !== 0) {
				setItemIndex(itemIndex - 1);
				return;
			}

			if (currentPageNumber === FIRST_PAGE_NUMBER) {
				const start = (pageCount - 1) * MAX_LENGTH;

				setCurrentPageList(recommandationList.slice(start, start + MAX_LENGTH));
				setCurrentPageNumber(pageCount);

				const lastIndex = (recommandationList.length - 1) % MAX_LENGTH;

				setItemIndex(lastIndex);
				return;
			}

			const end = (currentPageNumber - 1) * MAX_LENGTH;

			setCurrentPageList(recommandationList.slice(end - MAX_LENGTH, end));
			setCurrentPageNumber(currentPageNumber - 1);
			setItemIndex(MAX_LENGTH - 1);
			return;
		}

		if (keyCode === KEY_CODE.ENTER || keyCode === KEY_CODE.SPACE || keyCode === KEY_CODE.TAB) {
			while (secondBuffer.current.pop()) {
				latexFunction.keystroke("Shift-Right Del");
			}
			selectAutoCompleteItem(false);
			latexFunction.insertClickedLatex("");
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

	const onMouseEnter = useCallback(e => {
		setItemIndex(+e.target.dataset.id);
	}, []);

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
			recommandationList={currentPageList}
			targetIndex={itemIndex}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
		/>
	);
}
