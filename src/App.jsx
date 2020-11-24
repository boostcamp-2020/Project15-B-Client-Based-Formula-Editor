import React from "react";

import GlobalStyle from "./GlobalStyle";
import MainLayout from "./layouts/MainLayout";
import HeaderContainer from "./containers/HeaderContainer";
import BodyContainer from "./containers/BodyContainer";
import FooterContainer from "./containers/FooterContainer";
import SideBar from "./containers/SideBar";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<MainLayout>
				<HeaderContainer />
				<BodyContainer />
				<FooterContainer />
			</MainLayout>
			<SideBar />
		</>
	);
}
