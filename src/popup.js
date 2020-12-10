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

	cancel.addEventListener("click", () => {
		document.body.removeChild(popup);

		resolve(false);
	});

	confirm.addEventListener("click", () => {
		document.body.removeChild(popup);

		if (mode === "confirm") resolve(true);
		if (mode === "prompt") resolve(input.value);
	});

	document.body.appendChild(popup);
});

export default customPopup;
