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

function App() {
	function ScrollHandler(number) {
		const projectWrappers = document.querySelectorAll(".project-wrapper");
		const nextWrapper = projectWrappers[number];
		if (nextWrapper) {
			window.scrollTo({
				top: nextWrapper.offsetTop,
				behavior: "smooth",
			});
		}
	}

	const [isVisible, setIsVisible] = useState(false);
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
					With strong university background and ability to progress I am willing
					to encounter professional expectations. During my studies, I was
					involved in developing several different applications, using React.js,
					Node.Js, JavaScript and many more.
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
					<h2 className="project-name" style={{ color: "#d1caca" }}>
						CIRCLES
					</h2>
					<div className="project-container">
						<img alt="bg" src={circlesBg} className="circlesBg" />
						<div className="circles-box">
							<div className="circles-link">
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
					<div className="header-sign">
						<div
							className="header-sign-wrapper"
							onClick={() => {
								ScrollHandler(1);
							}}>
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
							<div className="circles-link">
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
										fontSize: "13px",
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
					<div className="header-sign">
						<div
							className="header-sign-wrapper"
							onClick={() => {
								ScrollHandler(2);
							}}>
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
							<div className="circles-link">
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
										fontSize: "14px",
									}}>
									Application depended on choosing a movie created by the group
									of programmers in which I took role as a programmer. App
									component with Public and Private routes, AuthPage page logic.
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
					<div className="header-sign">
						<div
							className="header-sign-wrapper"
							onClick={() => {
								ScrollHandler(3);
							}}>
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
							<div className="circles-link">
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
										fontSize: "15px",
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
					<div className="header-sign">
						<div
							className="header-sign-wrapper"
							onClick={() => {
								ScrollHandler(4);
							}}>
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
							<div className="circles-link">
								<a
									href="https://github.com/BartlomiejPop/REST-API-application"
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
										fontSize: "15px",
									}}>
									Simple project developed in a group of programmers. Workflow
									done in agile, everyday Scrum meetings and connecting ever
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
					<div className="header-sign">
						<div className="header-sign-wrapper">
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
							<span>MOVIESEARCH </span>
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
