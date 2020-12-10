import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { latexFunction } from "../util";
import KEY_CODE from "../constants/keyCode";
import mathquillLatex from "../constants/mathquillLatex";
import AutoComplete from "../presentationals/AutoComplete";

export default function AutoKeywordContainer() {
	const cursorPosition = useSelector(state => state.cursorPosition);
	const latexInput = useSelector(state => state.latexInput);
	const [isOpen, toggleIsOpen] = useState(false);
	const [itemIndex, setItemIndex] = useState(0);
	const [backslashCount, setBackslashCount] = useState(0);
	const buffer = useRef([]);
	const [recommandationList, setRecommandationList] = useState([]);

	const updateList = () => {
		const temp = buffer.current.join("").trim()
			.toLowerCase();
		const list = Object.keys(mathquillLatex).filter(key => mathquillLatex[key].includes(`\\${temp}`))
			.map(key => mathquillLatex[key]);

		if (list.length > 7) list.length = 7;
		setRecommandationList(list);
	};

	const keyupEvent = ({ keyCode }) => {
		if (keyCode === KEY_CODE.BACK_SLASH) {
			setBackslashCount(backslashCount + 1);
			toggleIsOpen(!isOpen);
		}

		if (isOpen && keyCode === KEY_CODE.BACK_SPACE) {
			const backslashCountInLatex = latexInput.split("").filter(char => char === "\\").length;

			buffer.current.pop();
			updateList();

			if (backslashCountInLatex !== backslashCount) {
				setBackslashCount(backslashCount - 1);
				toggleIsOpen(false);
			}
		}
	};

	const keydownEvent = ({ keyCode }) => {
		if (!isOpen) return;

		if (keyCode === KEY_CODE.DOWN) {
			const nextIndex = (itemIndex + 1) % recommandationList.length;

			setItemIndex(nextIndex);
		}

		if (keyCode === KEY_CODE.UP) {
			const prevIndex = (itemIndex - 1) < 0 ? recommandationList.length - 1 : itemIndex - 1;

			setItemIndex(prevIndex);
		}

		if (keyCode === KEY_CODE.ENTER || keyCode === KEY_CODE.SPACE || keyCode === KEY_CODE.TAB) {
			const target = recommandationList[itemIndex];

			const temp = buffer.current.join("").trim()
				.toLowerCase();

			const remainedLatexPart = target.replace(`\\${temp}`, "");

			latexFunction.insertLatex(remainedLatexPart);

			buffer.current = [];
			toggleIsOpen(false);
			setItemIndex(0);
		}
	};

	const keypressEvent = ({ keyCode }) => {
		if (!isOpen) return;

		const isUpperAlphabet = keyCode >= 65 && keyCode <= 90;
		const isLowerAlphabet = keyCode >= 97 && keyCode <= 122;

		if (isLowerAlphabet || isUpperAlphabet) {
			const character = String.fromCharCode(keyCode);

			buffer.current.push(character);
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
