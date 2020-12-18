/* eslint-disable no-use-before-define */
import KEY_CODE from "./constants/keyCode";

const customPopup = ({ mode, message, placeholder = "" }) => new Promise(resolve => {
	const popup = document.createElement("div");

	popup.classList.add("popup");

	const content = {
		confirm: ``,
		prompt: `<input type="text" placeholder="${placeholder}"/>`,
		image: `
			<input type="text" />
			<div>
				<label><input type="radio" name="extension" value="png" checked />png</label>
				<label><input type="radio" name="extension" value="jpeg" />jpeg</label>
			</div>
		`,
	};

	popup.innerHTML = `
		<svg viewBox="0 0 512 512">
			<path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm42-104c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42zm-81.37-211.401l6.8 136c.319 6.387 5.591 11.401 11.985 11.401h41.17c6.394 0 11.666-5.014 11.985-11.401l6.8-136c.343-6.854-5.122-12.599-11.985-12.599h-54.77c-6.863 0-12.328 5.745-11.985 12.599z" />
		</svg>
		<div>
			<div>${message}</div>
			${content[mode]}
			<div>
				<button type="button">취소</button>
				<button type="button" ${mode !== "confirm" && "disabled"}>확인</button>
			</div>
		</div>
	`;

	const [cancel, confirm] = popup.querySelectorAll("button");
	const input = popup.querySelector("input[type='text']");

	const enterKeyEvent = ({ keyCode }) => {
		if (keyCode !== KEY_CODE.ENTER) return;
		confirm.click();
	};

	const cancelClickEvent = () => {
		cleanUp();
		resolve(false);
	};

	const confirmClickEvent = () => {
		cleanUp();
		if (mode === "confirm") resolve(true);
		if (mode === "prompt") resolve(input.value);
		if (mode === "image") {
			const targetRadio = popup.querySelector("input[type='radio']:checked");

			resolve({ fileName: input.value, extension: targetRadio.value });
		}
	};

	const windowClickEvent = ({ target }) => {
		if (popup.contains(target)) return;
		cleanUp();
	};

	const inputChangeEvent = ({ target }) => {
		confirm.disabled = !target.value ? "disabled" : "";
	};

	popup.addEventListener("keydown", enterKeyEvent);
	cancel.addEventListener("click", cancelClickEvent);
	confirm.addEventListener("click", confirmClickEvent);
	input?.addEventListener("keyup", inputChangeEvent);
	setTimeout(() => window.addEventListener("click", windowClickEvent), 100);

	const cleanUp = () => {
		popup.removeEventListener("keydown", enterKeyEvent);
		window.removeEventListener("click", windowClickEvent);
		cancel.removeEventListener("click", cancelClickEvent);
		confirm.removeEventListener("click", confirmClickEvent);
		input?.removeEventListener("keyup", inputChangeEvent);
		popup.style.animationName = "up";
		popup.style.animationDuration = "1s";

		setTimeout(() => {
			document.body.removeChild(popup);
		}, 1000);
	};

	document.body.appendChild(popup);
	input ? input.focus() : confirm.focus();
});

export default customPopup;
