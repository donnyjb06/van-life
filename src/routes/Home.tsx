import Header from "@components/Header/Header";
import NavBarComponent from "@components/NavBar/index";
import logo from "../assets/vanlife-logo.svg";
import HeroSection from "@components/HeroSection/HeroSection";
import Footer from "@components/Footer/Footer";

const Home = () => {
	return (
		<>
			<Header logo={logo}>
				<NavBarComponent>
					<NavBarComponent.Link href="/about">About</NavBarComponent.Link>
					<NavBarComponent.Link href="/vans">Vans</NavBarComponent.Link>
				</NavBarComponent>
			</Header>
			<HeroSection
				mainTitle="You got the travel plans, we got the travel vans."
				subTitle="Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip."
				ctaText="Find your van"
			/>
			<Footer />
		</>

	);
};

export default Home;
