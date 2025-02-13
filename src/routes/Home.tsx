import Header from "@components/Header/Header";
import NavBarComponent from "@components/NavBar/index";
import logo from "../assets/vanlife-logo.svg";

const Home = () => {
	return (
		<>
		
			<Header logo={logo}>
				<NavBarComponent>
					<NavBarComponent.Link href="/">Home</NavBarComponent.Link>
					<NavBarComponent.Link href="/about">About</NavBarComponent.Link>
				</NavBarComponent>
			</Header>
		</>
	);
};

export default Home;
