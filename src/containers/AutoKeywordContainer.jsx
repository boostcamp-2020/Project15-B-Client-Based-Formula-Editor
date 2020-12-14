import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setLatexInput, setLatexTextInput, setBuffer } from "../slice";
import { latexFunction, getBackslashCountFromLatex } from "../util";
import KEY_CODE from "../constants/keyCode";
import mathquillLatex from "../constants/mathquillLatex";
import AutoComplete from "../presentationals/AutoComplete";

export default function AutoKeywordContainer() {
	const dispatch = useDispatch();
	const cursorPosition = useSelector(state => state.cursorPosition);
	const latexInput = useSelector(state => state.latexInput);
	const [isOpen, toggleIsOpen] = useState(false);
	const [itemIndex, setItemIndex] = useState(0);
	const [backslashCount, setBackslashCount] = useState(0);
	const buffer = useRef([]);
	const [recommandationList, setRecommandationList] = useState([]);
	const MAX_LENGTH = 7;

	const updateList = () => {
		const temp = buffer.current.join("").trim()
			.toLowerCase();
		const list = Object.keys(mathquillLatex).filter(key => mathquillLatex[key].includes(`\\${temp}`))
			.map(key => mathquillLatex[key]);

		if (list.length > MAX_LENGTH) list.length = MAX_LENGTH;
		setRecommandationList(list);
	};

	const keyupEvent = ({ keyCode }) => {
		if (keyCode === KEY_CODE.BACK_SLASH) {
			const backslashCountInLatex = getBackslashCountFromLatex(latexInput);

			setBackslashCount(backslashCountInLatex);
			toggleIsOpen(!isOpen);
			return;
		}

		const isRemoveKey = k => k === KEY_CODE.BACK_SPACE || k === KEY_CODE.DELETE;

		if (!isOpen && isRemoveKey(keyCode)) {
			const backslashCountInLatex = getBackslashCountFromLatex(latexInput);

			if (backslashCountInLatex !== backslashCount) {
				setBackslashCount(backslashCountInLatex);
			}
			return;
		}

		if (isOpen && isRemoveKey(keyCode)) {
			if (latexInput === "\\ ") {
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
	};

	const keydownEvent = ({ keyCode }) => {
		if (itemIndex > 0) {
			setItemIndex(0);
		}

		if (!isOpen) return;

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
			const target = recommandationList[itemIndex];

			const temp = buffer.current.join("").trim()
				.toLowerCase();

			const remainedLatexPart = target.replace(`\\${temp}`, "");

			latexFunction.insertLatex(remainedLatexPart);

			setRecommandationList([]);
			buffer.current = [];
			dispatch(setBuffer([]));
			toggleIsOpen(false);
			setItemIndex(0);
		}
	};

	const keypressEvent = ({ keyCode }) => {
		if (!isOpen) return;

		const alphabet = String.fromCharCode(keyCode);
		const isAlphabet = target => target.match(/[a-zA-Z]/i);

		if (isAlphabet(alphabet)) {
			buffer.current.push(alphabet);
			dispatch(setBuffer([...buffer.current]));
			updateList();
		}

		if (keyCode === KEY_CODE.SPACE) {
			toggleIsOpen(false);
		}
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
			recommandationList={recommandationList}
			targetIndex={itemIndex}
		/>
	);
}
