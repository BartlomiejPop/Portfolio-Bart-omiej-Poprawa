import { useState, useEffect } from "react";
import "./App.css";
import photo from "./images/photo.jpg";
import arrowDown from "./icons/arrow-down.svg";
import circles from "./images/circles.jpg";
import github from "./icons/github.svg";
import circlesBg from "./images/circlesBackground.png";
import phonebook from "./images/phonebook.jpg";
import phonebookBg from "./images/phonebookBg.jpg";
import React from "react";
import moviesearchBg from "./images/moviesearchBg.jpg";
import moviesearch from "./images/moviesearch.jpg";
import contactbookBg from "./images/contactbookBg.jpg";
import icecreamBg from "./images/icecreamBg.png";
import icecream from "./images/icecream.jpg";
import linkedinLight from "./icons/linkedinLight.svg";
import githubLight from "./icons/githubLight.svg";
import arrowUpPopUp from "./icons/arrowUpPopUp.svg";
import walletappBg from "./images/walletappBg.jpg";
import walletapp from "./images/walletapp.jpg";
import soYummy from "./images/soYummy.jpg";
import soYummyBg from "./images/soYummyBg.jpg";
import css from "./icons/css.svg";
import firebase from "./icons/firebase.svg";
import git from "./icons/git.svg";
import html from "./icons/html.svg";
import javascript from "./icons/javascript.svg";
import mongoDb from "./icons/mongoDb.svg";
import node from "./icons/node.svg";
import react from "./icons/react.svg";
import redux from "./icons/redux.svg";
import sass from "./icons/sass.svg";

function App() {
	const [isVisible, setIsVisible] = useState(false);
	const [showTechnologies, setShowTechnologies] = useState(true);

	function ScrollHandler(number) {
		const projectWrappers = document.querySelectorAll(".project-wrapper");
		const nextProjectWrapper = projectWrappers[number];

		if (nextProjectWrapper) {
			setTimeout(function () {
				setShowTechnologies(false);
			}, 100);

			setTimeout(function () {
				setShowTechnologies(true);
			}, 500);

			window.scrollTo({
				top: nextProjectWrapper.offsetTop,
				behavior: "smooth",
			});
		}
	}

	const scrollUp = () => {
		const scrollPosition = window.scrollY || window.pageYOffset;
		setIsVisible(scrollPosition > 0);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollUp);
		return () => {
			window.removeEventListener("scroll", scrollUp);
		};
	}, []);

	return (
		<div className="App">
			{isVisible && (
				<button className="scrollUpPopUp">
					<img
						src={arrowUpPopUp}
						className="arrowIcon"
						alt="scroll up"
						onClick={scrollToTop}
					/>
				</button>
			)}
			<header className="App-header">
				<div className="lines">
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>
				<div className="logos">
					<img src={photo} className="App-logo" alt="logo" />
					<div className="social-media">
						<a
							href="https://github.com/BartlomiejPop"
							target="_blank"
							rel="noreferrer">
							<img src={githubLight} className="social-media-logo" alt="logo" />
						</a>
						<a
							href="https://www.linkedin.com/in/bart%C5%82omiej-poprawa-961397247/"
							target="_blank"
							rel="noreferrer">
							<img
								src={linkedinLight}
								className="social-media-logo"
								alt="logo"
							/>
						</a>
					</div>
				</div>
				<span className="name">Bartłomiej Poprawa</span>
				<p className="header-description">
					With strong university background and after accomplishing fullstack
					developer course I am presenting my portfolio. During my studies, I
					was involved in developing several different applications, using
					React.js, Node.Js, JavaScript, Git and many more.
				</p>
				<div
					className="header-sign"
					onClick={() => {
						ScrollHandler(0);
					}}>
					<div className="header-sign-wrapper">
						<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
						<span>My Projects </span>
						<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
					</div>
				</div>
			</header>
			<div>
				<div className="project-wrapper">
					<h2 className="project-name" style={{ color: " #8cab37" }}>
						SO YUMMY
					</h2>
					<div className="project-container">
						<img alt="bg" src={soYummyBg} className="circlesBg" />
						<div className="soYummy-box">
							<div className="page-link">
								<a
									href="https://bartlomiejpop.github.io/So-Yummy-frontend/"
									target="_blank"
									rel="noreferrer">
									<img alt="project" className="project-image" src={soYummy} />
								</a>
							</div>
							<div className="circles-description">
								<p className="soYummy-description">
									Recipe cookbook application. Backend made in node.js. Routes
									described in Express. Multer implemented to work with
									files.Data saved in mongoDb database. Frontend made in React
									and Redux. Authentication logic. Private and public
									routes.Pages linked to particular routes.
								</p>
								<div className="circles-gitHub">
									<a
										href="https://github.com/BartlomiejPop/So-Yummy-frontend"
										target="_blank"
										rel="noreferrer">
										<img alt="ghIcon" className="github-icon" src={github} />
									</a>
								</div>
							</div>
						</div>
					</div>
					{showTechnologies && (
						<div className="technologies-wrapper">
							<span>TECHNOLOGIES</span>
							<div className="technologies">
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={mongoDb}
									/>
								</div>
								<div className="technology">
									<img
										alt="javascriptIcon"
										className="technologyIcon"
										src={javascript}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={node}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={react}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={redux}
									/>
								</div>
							</div>
						</div>
					)}
					<div
						className="header-sign"
						onClick={() => {
							ScrollHandler(1);
						}}>
						<div className="header-sign-wrapper">
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
							<span>CIRCLES </span>
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
						</div>
					</div>
				</div>
				<div className="project-wrapper">
					<h2 className="project-name" style={{ color: "#d1caca" }}>
						CIRCLES
					</h2>
					<div className="project-container">
						<img alt="bg" src={circlesBg} className="circlesBg" />
						<div className="circles-box">
							<div className="page-link">
								<a
									href="https://bartlomiejpop.github.io/circles-ranking/"
									target="_blank"
									rel="noreferrer">
									<img alt="project" className="project-image" src={circles} />
								</a>
							</div>
							<div className="circles-description">
								<p className="project-description">
									Game based on clicking circles in a short time that is
									constantly decreasing. Click on the special circles to extend
									time before they expire. Live database actualizing and
									displaying top 10 records.
								</p>
								<div className="circles-gitHub">
									<a
										href="https://github.com/BartlomiejPop/circles-ranking"
										target="_blank"
										rel="noreferrer">
										<img alt="ghIcon" className="github-icon" src={github} />
									</a>
								</div>
							</div>
						</div>
					</div>
					{showTechnologies && (
						<div className="technologies-wrapper">
							<span>TECHNOLOGIES</span>
							<div className="technologies">
								<div className="technology">
									<img
										alt="javascriptIcon"
										className="technologyIcon"
										src={javascript}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={firebase}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={html}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={css}
									/>
								</div>
							</div>
						</div>
					)}
					<div
						className="header-sign"
						onClick={() => {
							ScrollHandler(2);
						}}>
						<div className="header-sign-wrapper">
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
							<span>PHONEBOOK </span>
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
						</div>
					</div>
				</div>
				<div className="project-wrapper">
					<h2 className="project-name" style={{ color: "#5f5e5e" }}>
						PHONEBOOK
					</h2>
					<div className="project-container">
						<img alt="bg" src={phonebookBg} className="circlesBg" />
						<div className="phonebook-box">
							<div className="page-link">
								<a
									href="https://bartlomiejpop.github.io/goit-react-hw-08-phonebook/"
									target="_blank"
									rel="noreferrer">
									<img
										alt="phonebookImage"
										className="project-image"
										src={phonebook}
									/>
								</a>
							</div>
							<div className="circles-description">
								<p
									className="project-description"
									style={{
										color: "#5f5e5e",
										backgroundColor: " #e6dfdf",
									}}>
									Single page application based on React-router. Project built
									with Redux toolkit architecture and lazy-loaded components.
									Authentication system. Props strongly described using
									prop-types. Styled with Material UI and css modules.
								</p>
								<div
									className="circles-gitHub"
									style={{ backgroundColor: " #e6dfdf" }}>
									<a
										href="https://github.com/BartlomiejPop/goit-react-hw-08-phonebook"
										target="_blank"
										rel="noreferrer">
										<img alt="ghIcon" className="github-icon" src={github} />
									</a>
								</div>
							</div>
						</div>
					</div>
					{showTechnologies && (
						<div className="technologies-wrapper">
							<span>TECHNOLOGIES</span>
							<div className="technologies">
								<div className="technology">
									<img
										alt="javascriptIcon"
										className="technologyIcon"
										src={react}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={redux}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={javascript}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={css}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={html}
									/>
								</div>
							</div>
						</div>
					)}
					<div
						className="header-sign"
						onClick={() => {
							ScrollHandler(3);
						}}>
						<div className="header-sign-wrapper">
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
							<span>MOVIESEARCH </span>
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
						</div>
					</div>
				</div>
				<div className="project-wrapper">
					<h2 className="project-name" style={{ color: "rgb(227, 100, 50,1)" }}>
						MOVIESEARCH
					</h2>
					<div className="project-container">
						<img
							alt="movieSearchBg"
							src={moviesearchBg}
							className="circlesBg"
						/>
						<div className="moviesearch-box">
							<div className="page-link">
								<a
									href="https://michalmazurdev.github.io/team-project-filmoteka/index.html"
									target="_blank"
									rel="noreferrer">
									<img
										alt="moviesearchImage"
										className="project-image"
										src={moviesearch}
									/>
								</a>
							</div>
							<div className="circles-description">
								<p
									className="project-description"
									style={{
										color: "#fff",
										backgroundColor: " rgb(227, 100, 50,0.7)",
									}}>
									Application based on choosing a movie created by the group of
									programmers. App component with Public and Private routes,
									AuthPage page logic. Connected to Google's Firebase database
								</p>
								<div
									className="circles-gitHub"
									style={{ backgroundColor: " rgb(227, 100, 50,0.7)" }}>
									<a
										href="https://github.com/BartlomiejPop/team-project-filmoteka"
										target="_blank"
										rel="noreferrer">
										<img alt="ghIcon" className="github-icon" src={github} />
									</a>
								</div>
							</div>
						</div>
					</div>
					{showTechnologies && (
						<div className="technologies-wrapper">
							<span>TECHNOLOGIES</span>
							<div className="technologies">
								<div className="technology">
									<img
										alt="javascriptIcon"
										className="technologyIcon"
										src={firebase}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={git}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={javascript}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={html}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={sass}
									/>
								</div>
							</div>
						</div>
					)}
					<div
						className="header-sign"
						onClick={() => {
							ScrollHandler(4);
						}}>
						<div className="header-sign-wrapper">
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
							<span>MONGODB CONTACTBOOK </span>
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
						</div>
					</div>
				</div>
				<div className="project-wrapper">
					<h2 className="project-name" style={{ color: "rgb(106, 170, 91)" }}>
						MONGODB CONTACTBOOK
					</h2>
					<div className="project-container">
						<img
							alt="contactbookBg"
							src={contactbookBg}
							className="circlesBg"
						/>
						<div className="contactbook-box">
							<div className="page-link">
								<a
									href="https://github.com/BartlomiejPop/REST-API-application"
									target="_blank"
									rel="noreferrer">
									<img
										alt="contactbookBg"
										className="project-image"
										src={contactbookBg}
									/>
								</a>
							</div>
							<div className="circles-description">
								<p
									className="project-description"
									style={{
										color: "#5f5e5e",
										backgroundColor: "rgb(153, 212, 138,0.4)",
									}}>
									Rest API application developed with Express.js and MongoDB
									database. Authentication system. Endpoints described to allow
									managing actions on particular contacts
								</p>
								<div
									className="circles-gitHub"
									style={{ backgroundColor: "rgb(153, 212, 138,0.4)" }}>
									<a
										href="https://github.com/BartlomiejPop/REST-API-application"
										target="_blank"
										rel="noreferrer">
										<img alt="ghIcon" className="github-icon" src={github} />
									</a>
								</div>
							</div>
						</div>
					</div>
					{showTechnologies && (
						<div className="technologies-wrapper">
							<span>TECHNOLOGIES</span>
							<div className="technologies">
								<div className="technology">
									<img
										alt="javascriptIcon"
										className="technologyIcon"
										src={node}
									/>
								</div>
								<div className="technology">
									<img
										alt="javascriptIcon"
										className="technologyIcon"
										src={mongoDb}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={javascript}
									/>
								</div>
							</div>
						</div>
					)}
					<div
						className="header-sign"
						onClick={() => {
							ScrollHandler(5);
						}}>
						<div className="header-sign-wrapper">
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
							<span>WALLET-APP </span>
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
						</div>
					</div>
				</div>
				<div className="project-wrapper">
					<h2 className="project-name" style={{ color: "#5f5e5e" }}>
						WALLET-APP
					</h2>
					<div className="project-container">
						<img alt="walletappBg" src={walletappBg} className="circlesBg" />
						<div className="walletapp-box">
							<div className="page-link">
								<a
									href="https://bartlomiejpop.github.io/Wallet-App/"
									target="_blank"
									rel="noreferrer">
									<img
										alt="walletapp"
										className="project-image"
										src={walletapp}
									/>
								</a>
							</div>
							<div className="circles-description">
								<p
									className="project-description"
									style={{
										color: "#5f5e5e",
										backgroundColor: "rgb(255, 255, 255,0.4)",
									}}>
									Cash managment app developed by group of programmers.
									Authentication system with private routes and MongoDB
									database. Made using React toolkit and Node.js Express
									framework.
								</p>
								<div
									className="circles-gitHub"
									style={{ backgroundColor: "rgb(255, 255, 255,0.4)" }}>
									<a
										href="https://github.com/BartlomiejPop/Wallet-App"
										target="_blank"
										rel="noreferrer">
										<img alt="ghIcon" className="github-icon" src={github} />
									</a>
								</div>
							</div>
						</div>
					</div>
					{showTechnologies && (
						<div className="technologies-wrapper">
							<span>TECHNOLOGIES</span>
							<div className="technologies">
								<div className="technology">
									<img
										alt="javascriptIcon"
										className="technologyIcon"
										src={node}
									/>
								</div>
								<div className="technology">
									<img
										alt="javascriptIcon"
										className="technologyIcon"
										src={mongoDb}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={react}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={redux}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={javascript}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={git}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={css}
									/>
								</div>
							</div>
						</div>
					)}
					<div
						className="header-sign"
						onClick={() => {
							ScrollHandler(6);
						}}>
						<div className="header-sign-wrapper">
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
							<span>ICE CREAM </span>
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
						</div>
					</div>
				</div>
				<div className="project-wrapper">
					<h2 className="project-name" style={{ color: "#5f5e5e" }}>
						ICE CREAM
					</h2>
					<div className="project-container">
						<img alt="icecreamBg" src={icecreamBg} className="circlesBg" />
						<div className="icecream-box">
							<div className="page-link">
								<a
									href="https://kamild90.github.io/projekt-grupa-3/#"
									target="_blank"
									rel="noreferrer">
									<img
										alt="icecream"
										className="project-image"
										src={icecream}
									/>
								</a>
							</div>
							<div className="circles-description">
								<p
									className="project-description"
									style={{
										color: "#5f5e5e",
										backgroundColor: "rgb(255, 255, 255,0.4)",
									}}>
									Simple project developed in a group of programmers. Workflow
									done in agile, everyday Scrum meetings and merging every
									member's git branches.
								</p>
								<div
									className="circles-gitHub"
									style={{ backgroundColor: "rgb(255, 255, 255,0.4)" }}>
									<a
										href="https://github.com/KamilD90/projekt-grupa-3"
										target="_blank"
										rel="noreferrer">
										<img alt="ghIcon" className="github-icon" src={github} />
									</a>
								</div>
							</div>
						</div>
					</div>
					{showTechnologies && (
						<div className="technologies-wrapper">
							<span>TECHNOLOGIES</span>
							<div className="technologies">
								<div className="technology">
									<img
										alt="javascriptIcon"
										className="technologyIcon"
										src={javascript}
									/>
								</div>
								<div className="technology">
									<img
										alt="javascriptIcon"
										className="technologyIcon"
										src={html}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={git}
									/>
								</div>
								<div className="technology">
									<img
										alt="technologyIcon"
										className="technologyIcon"
										src={sass}
									/>
								</div>
							</div>
						</div>
					)}
					<div className="header-sign-last">
						<div className="header-sign-wrapper">
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
							<span>AND MORE IN THE FUTURE! </span>
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
