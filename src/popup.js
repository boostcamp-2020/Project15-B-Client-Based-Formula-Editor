const customPopup = ({ mode, message }) => new Promise(resolve => {
	const popup = document.createElement("div");

	popup.classList.add("popup");

	popup.innerHTML = `
    <div>${message}</div>
    <button type="button">취소</button>
    <button type="button">확인</button>
  `;

	const [cancel, confirm] = popup.querySelectorAll("button");

	cancel.addEventListener("click", () => {
		document.body.removeChild(popup);
		resolve(false);
	});

	confirm.addEventListener("click", () => {
		document.body.removeChild(popup);
		resolve(true);
	});

	document.body.appendChild(popup);
});

export default customPopup;
