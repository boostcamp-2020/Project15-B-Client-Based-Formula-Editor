import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setLatexInput } from "../slice";
import { decodeQueryString } from "../util";

export default function QueryStringCatcher() {
	const dispatch = useDispatch();
	const latexInput = useSelector(state => state.latexInput);

	if (latexInput !== "") return null;

	const latex = decodeQueryString();

	dispatch(setLatexInput(latex));

	return <Redirect to="/" />;
}
