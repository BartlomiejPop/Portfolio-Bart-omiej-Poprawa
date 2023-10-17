import logo from "./logo.svg";
import "./App.css";
import tree from "./images/tree.jpg";
import arrowDown from "./icons/arrow-down.svg";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={tree} className="App-logo" alt="logo" />
				<span className="name">Bartłomiej Poprawa</span>
				<p className="header-description">
					With strong university background and ability to progress I am willing
					to encounter the professional expectations. During my studies, I was
					involved in developing several different applications, using React.js,
					Node.Js, JavaScript and many more.
				</p>
				<div className="header-sign">
					<div className="header-sign-wrapper">
						<img style={{ width: "30px" }} src={arrowDown} />
						<span>My Projects </span>
						<img style={{ width: "30px" }} src={arrowDown} />
					</div>
				</div>
			</header>
			<projects>
				<div className="project-container">
					<div className="circles-box">
						<div className="circles-link"></div>
						<div className="circles-description">
							<div>DESCRIPTION</div>
							<div className="circles-gitHub"></div>
						</div>
					</div>
				</div>
				<div className="project-container">
					{" "}
					<div className="circles-box">
						<div className="circles-link"></div>
						<div className="circles-description">
							<div>DESCRIPTION</div>
							<div className="circles-gitHub"></div>
						</div>
					</div>{" "}
				</div>
				<div className="project-container">
					{" "}
					<div className="circles-box">
						<div className="circles-link"></div>
						<div className="circles-description">
							<div>DESCRIPTION</div>
							<div className="circles-gitHub"></div>
						</div>
					</div>{" "}
				</div>
				<div className="project-container">
					{" "}
					<div className="circles-box">
						<div className="circles-link"></div>
						<div className="circles-description">
							<div>DESCRIPTION</div>
							<div className="circles-gitHub"></div>
						</div>
					</div>{" "}
				</div>
				<div className="project-container">
					{" "}
					<div className="circles-box">
						<div className="circles-link"></div>
						<div className="circles-description">
							<div>DESCRIPTION</div>
							<div className="circles-gitHub"></div>
						</div>
					</div>{" "}
				</div>
			</projects>
		</div>
	);
}

export default App;
