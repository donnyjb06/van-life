import Header from "../../components/Header/Header";
import NavBarComponent from "../../components/NavBar/index";
import logo from "../../assets/vanlife-logo.svg";
import aboutImage from "../../assets/about-banner.jpg";
import Footer from "../../components/Footer/Footer";
import "./About.scss";
import Card from "../../components/Card/Card";

const About = () => {
	return (
		<>
			<Header logo={logo}>
				<NavBarComponent>
					<NavBarComponent.Link href="/about">About</NavBarComponent.Link>
					<NavBarComponent.Link href="/vans">Vans</NavBarComponent.Link>
				</NavBarComponent>
			</Header>
			<img src={aboutImage} className="banner-image" alt="About" />
			<main className="main">
				<div className="main__content">
					<h1 className="main__title">
						Don’t squeeze in a sedan when you could relax in a van.
					</h1>
					<p className="main__mission">
						Our mission is to enliven your road trip with the perfect travel van
						rental. Our vans are recertified before each trip to ensure your
						travel plans can go off without a hitch. (Hitch costs extra 😉)
					</p>
					<p className="main__text">
						Our team is a crew of vanlife enthusiasts who know firsthand the
						magic of exploring the world on four wheels.
					</p>
				</div>
				<Card
					topText="Your destination is waiting"
					bottomText="Your van is ready"
					btnClass="card__button"
					btnText="Explore our vans"
					btnOnClick={() => {}}
				/>
			</main>
			<Footer />
		</>
	);
};

export default About;
