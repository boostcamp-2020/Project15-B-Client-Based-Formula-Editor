import React from "react";

import GlobalStyle from "./GlobalStyle";
import HeaderContainer from "./containers/HeaderContainer";
import BodyContainer from "./containers/BodyContainer";
import FooterContainer from "./containers/FooterContainer";
import SideBar from "./containers/SideBar";
import MainLayout from "./layouts/MainLayout";

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
