import "./App.css";
import tree from "./images/tree.jpg";
import arrowDown from "./icons/arrow-down.svg";
import circles from "./images/circles.jpg";
import github from "./icons/github.svg";
import circlesBg from "./images/circlesBackground.png";
import phonebook from "./images/phonebook.jpg";
import phonebookBg from "./images/phonebookBg.jpg";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={tree} className="App-logo" alt="logo" />
				<span className="name">Bartłomiej Poprawa</span>
				<p className="header-description">
					With strong university background and ability to progress I am willing
					to encounter professional expectations. During my studies, I was
					involved in developing several different applications, using React.js,
					Node.Js, JavaScript and many more.
				</p>
				<div className="header-sign">
					<div className="header-sign-wrapper">
						<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
						<span>My Projects </span>
						<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
					</div>
				</div>
			</header>
			<projects>
				<div className="project-wrapper">
					<h2 className="project-name" style={{ color: "#d1caca" }}>
						CIRCLES
					</h2>
					<div className="project-container">
						<img src={circlesBg} className="circlesBg" />
						<div className="circles-box">
							<div className="circles-link">
								<a
									href="https://bartlomiejpop.github.io/circles-ranking/"
									target="_blank">
									<img className="project-image" src={circles} />
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
										target="_blank">
										<img className="github-icon" src={github} />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="header-sign">
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
						<img src={phonebookBg} className="circlesBg" />
						<div className="phonebook-box">
							<div className="circles-link">
								<a
									href="https://bartlomiejpop.github.io/goit-react-hw-08-phonebook/"
									target="_blank">
									<img className="project-image" src={phonebook} />
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
										target="_blank">
										<img className="github-icon" src={github} />
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
				<div className="project-wrapper">
					<h2 className="project-name">CIRCLES</h2>
					<div className="project-container">
						<div className="circles-box">
							<div className="circles-link"></div>
							<div className="circles-description">
								<div>DESCRIPTION</div>
								<div className="circles-gitHub"></div>
							</div>
						</div>
					</div>
					<div className="header-sign">
						<div className="header-sign-wrapper">
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
							<span>NODE DATABASE </span>
							<img alt="arrow icon" style={{ width: "30px" }} src={arrowDown} />
						</div>
					</div>
				</div>
				<div className="project-wrapper">
					<h2 className="project-name">NODE DATABASE</h2>
					<div className="project-container">
						<div className="circles-box">
							<div className="circles-link"></div>
							<div className="circles-description">
								<div>DESCRIPTION</div>
								<div className="circles-gitHub"></div>
							</div>
						</div>
					</div>
				</div>
			</projects>
		</div>
	);
}

export default App;
