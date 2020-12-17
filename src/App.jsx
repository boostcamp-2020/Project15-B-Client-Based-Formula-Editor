import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import QueryStringCatcher from "./containers/QueryStringCatcher";
import TutorialContainer from "./containers/TutorialContainer";
import MainContainer from "./containers/MainContainer";

export default function App() {
	return (
		<BrowserRouter>
			<Route exact path="/">
				<GlobalStyle />
				<QueryStringCatcher />
				<TutorialContainer />
				<MainContainer />
			</Route>
		</BrowserRouter>
	);
}
