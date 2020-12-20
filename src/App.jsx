import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import GlobalStyle from "./GlobalStyle";
import QueryStringCatcher from "./containers/QueryStringCatcher";
import TutorialContainer from "./containers/TutorialContainer";
import MainContainer from "./containers/MainContainer";

export default function App() {
	const theme = useSelector(state => state.theme);
	const isTutorialOn = useSelector(state => state.isTutorialOn);

	return (
		<BrowserRouter>
			<Route exact path="/">
				<GlobalStyle theme={theme} />
				<QueryStringCatcher />
				{isTutorialOn && <TutorialContainer />}
				<MainContainer />
			</Route>
		</BrowserRouter>
	);
}
