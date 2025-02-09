import { Link } from "react-scroll";

const HeaderLogo = () => {
	return (
		<h1 className="header_logo">
			<Link
				to="mainvisual"
				duration={1200}
				smooth={true}
				offset={-80}
				className="jsNavBtn"
			>
				<img src="kashinomilogo2.svg" alt="旭川市のケーキ屋さん　かしのみ" />
			</Link>
		</h1>
	);
};

export default HeaderLogo;
