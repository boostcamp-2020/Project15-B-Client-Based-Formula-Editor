import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
} from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import HeaderContainer from "./containers/HeaderContainer";
import BodyContainer from "./containers/BodyContainer";
import FooterContainer from "./containers/FooterContainer";
import SideBar from "./containers/SideBar";
import MainLayout from "./layouts/MainLayout";
import RouterExceptionCatcher from "./containers/RouterExceptionCatcher";

export default function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<GlobalStyle />
					<MainLayout>
						<HeaderContainer />
						<BodyContainer />
						<FooterContainer />
					</MainLayout>
					<SideBar />
				</Route>
				<Route path="/:latexParameter">
					<RouterExceptionCatcher />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
