const customPopup = ({ mode, message }) => new Promise(resolve => {
	const popup = document.createElement("div");

	popup.classList.add("popup");

	if (mode === "confirm") {
		popup.innerHTML = `
			<div>${message}</div>
			<button type="button">취소</button>
			<button type="button">확인</button>
		`;
	}

	if (mode === "prompt") {
		popup.innerHTML = `
			<div>${message}</div>
			<input type="text" />
			<button type="button">취소</button>
			<button type="button">확인</button>
		`;
	}

	const [cancel, confirm] = popup.querySelectorAll("button");
	const input = popup.querySelector("input");

	const windowClickEvent = ({ target }) => {
		if (popup.contains(target)) return;

		removeAllEventListener();
		document.body.removeChild(popup);
	};
	const cancelClickEvent = () => {
		document.body.removeChild(popup);

		removeAllEventListener();
		resolve(false);
	};
	const confirmClickEvent = () => {
		document.body.removeChild(popup);

		removeAllEventListener();
		if (mode === "confirm") resolve(true);
		if (mode === "prompt") resolve(input.value);
	};

	cancel.addEventListener("click", cancelClickEvent);
	confirm.addEventListener("click", confirmClickEvent);
	setTimeout(() => window.addEventListener("click", windowClickEvent), 100);

	const removeAllEventListener = () => {
		window.removeEventListener("click", windowClickEvent);
		cancel.removeEventListener("click", cancelClickEvent);
		confirm.removeEventListener("click", confirmClickEvent);
	};

	document.body.appendChild(popup);
});

export default customPopup;
