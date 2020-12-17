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
	const fontInfo = useSelector(state => state.fontInfo);
	const latexInput = useSelector(state => state.latexInput);
	const [isOpen, toggleIsOpen] = useState(false);
	const [itemIndex, setItemIndex] = useState(0);
	const [backslashCount, setBackslashCount] = useState(0);
	const buffer = useRef([]);
	const secondBuffer = useRef([]);
	const [recommandationList, setRecommandationList] = useState([]);
	const MAX_LENGTH = 7;

	const [pageCount, setPageCount] = useState(0);
	const [currentPageNumber, setCurrentPageNumber] = useState(0);
	const [currentPageList, setCurrentPageList] = useState([]);

	const updateList = () => {
		const temp = buffer.current.join("").trim();
		const list = Object.keys(mathquillLatex).filter(key => mathquillLatex[key].includes(`\\${temp}`))
			.map(key => mathquillLatex[key]);

		setRecommandationList(list);
		setPageCount(Math.ceil(list.length / MAX_LENGTH));
		setCurrentPageList(list.slice(0, MAX_LENGTH));
		setCurrentPageNumber(1);
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
			// itemIndex가 currenPageList의 마지막 아이템을 가리키고 있다면
			if (itemIndex + 1 === currentPageList.length) {
				// 다음 페이지가 있다면
				if (currentPageNumber < pageCount) {
					const start = currentPageNumber * MAX_LENGTH;

					setCurrentPageList(recommandationList.slice(start, start + MAX_LENGTH));
					setCurrentPageNumber(currentPageNumber + 1);
					setItemIndex(0);
					return;
				}

				// 다음 페이지 없다면 첫 페이지로
				setCurrentPageList(recommandationList.slice(0, MAX_LENGTH));
				setCurrentPageNumber(1);
				setItemIndex(0);
				return;
			}

			// itemIndex가 currenPageList의 첫 번째 또는 중간 아이템을 가리키고 있다면
			setItemIndex(itemIndex + 1);
			return;
		}

		if (keyCode === KEY_CODE.UP) {
			// itemIndex가 currentPageList의 첫 아이템을 가리키고 있다면
			if (itemIndex === 0) {
				// 현재 첫 페이지라면
				if (currentPageNumber === 1) {
					const start = (pageCount - 1) * MAX_LENGTH;

					setCurrentPageList(recommandationList.slice(start, start + MAX_LENGTH));
					setCurrentPageNumber(pageCount);

					const lastIndex = (recommandationList.length - 1) % MAX_LENGTH;

					setItemIndex(lastIndex);
					return;
				}

				// 현재 중간 페이지 라면
				const end = (currentPageNumber - 1) * MAX_LENGTH;

				setCurrentPageList(recommandationList.slice(end - MAX_LENGTH, end));
				setCurrentPageNumber(currentPageNumber - 1);
				setItemIndex(MAX_LENGTH - 1);
				return;
			}

			// itemIntex가 currentPageList의 중간 또는 마지막 아이템을 가리키고 있다면
			setItemIndex(itemIndex - 1);
			return;
		}

		if (keyCode === KEY_CODE.ENTER || keyCode === KEY_CODE.SPACE || keyCode === KEY_CODE.TAB) {
			while (secondBuffer.current.pop()) {
				latexFunction.keystroke("Shift-Right Del");
			}

			const target = recommandationList[itemIndex];
			const temp = buffer.current.join("").trim();

			const remainedLatexPart = target?.replace(`\\${temp}`, "");

			latexFunction.insertLatex(remainedLatexPart || "");

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

		buffer.current.push(alphabet);
		dispatch(setBuffer([...buffer.current]));
		updateList();
	};

	const onClick = () => {
		const target = recommandationList[itemIndex];

		const temp = buffer.current.join("").trim();

		const remainedLatexPart = target.replace(`\\${temp}`, "");

		latexFunction.insertClickedLatex(remainedLatexPart);

		setRecommandationList([]);
		buffer.current = [];
		dispatch(setBuffer([]));
		toggleIsOpen(false);
		setItemIndex(0);
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
			recommandationList={currentPageList}
			targetIndex={itemIndex}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
		/>
	);
}
