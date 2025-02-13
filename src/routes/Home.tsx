import Header from "@components/Header/Header/Header";
import NavBarComponent from "@components/Header/NavBar/index";
const Home = () => {
	return (
		<>
			<Header>
				<NavBarComponent>
					<NavBarComponent.Link href="/">Home</NavBarComponent.Link>
					<NavBarComponent.Link href="/about">About</NavBarComponent.Link>
				</NavBarComponent>
			</Header>
		</>
	);
};

export default Home;
