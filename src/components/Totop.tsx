import { Link } from "react-scroll";

const Totop = () => {
	return (
		<Link
			to="mainvisual"
			duration={1200}
			smooth={true}
			offset={-80}
			className="totop"
		>
			TO TOP
		</Link>
	);
};

export default Totop;
