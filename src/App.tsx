import "./App.css";
import Access from "./components/Access";
import Gallery from "./components/Gallery";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Intro from "./components/Intro";
import Mainvisual from "./components/Mainvisual";
import Menu from "./components/Menu/Menu";
import Totop from "./components/Totop";

function App() {
	return (
		<>
			<Header />
			<Mainvisual />
			<Intro />
			<Menu />
			<Gallery />
			<Info />
			<Access />

			<footer className="footer">
				<small>©かしのみカフェ</small>
			</footer>

			<Totop />
		</>
	);
}

export default App;
