import { Link } from "react-scroll";

const HeaderNavPc = () => {
	const durationTime = 1200;
	const offset = -60;
	return (
		<nav className="header_nav_pc">
			<ul>
				<li>
					<Link
						to="intro"
						smooth={true}
						duration={durationTime}
						offset={offset}
						className="jsNavBtn"
					>
						かしのみについて
					</Link>
				</li>
				<li>
					<Link
						to="menu"
						smooth={true}
						duration={durationTime}
						offset={offset}
						className="jsNavBtn"
					>
						メニュー
					</Link>
				</li>
				<li>
					<Link
						to="info"
						smooth={true}
						duration={durationTime}
						offset={offset}
						className="jsNavBtn"
					>
						営業時間
					</Link>
				</li>
				<li>
					<Link
						to="access"
						smooth={true}
						duration={durationTime}
						offset={offset}
						className="jsNavBtn"
					>
						アクセス
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default HeaderNavPc;
