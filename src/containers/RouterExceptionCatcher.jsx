import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setLatexTextInput } from "../slice";

export default function RouterExceptionCatcher() {
	const { latexParameter } = useParams();
	const dispatch = useDispatch();

	const latex = latexParameter.replace(/@/g, "\\");

	dispatch(setLatexTextInput(latex));

	return <Redirect to="/" />;
}
