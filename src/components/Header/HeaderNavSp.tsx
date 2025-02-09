import { useState } from "react";
import { Link } from "react-scroll";

const HeaderNavSp = () => {
	const [isSliderActive, setIsSliderActive] = useState<boolean>(false);

	const durationTime = 1200;
	const offset = -80;

	const handleSliderActive = () => {
		setIsSliderActive((prev) => !prev);
	};

	return (
		<div className="header_nav_sp">
			<div
				className={`header_nav_sp_slider ${
					isSliderActive ? "header_nav_sp_slider-active" : ""
				}`}
			>
				<ul>
					<li className="header_nav_sp_slider_img">
						<Link
							onClick={handleSliderActive}
							to="mainvisual"
							smooth={true}
							duration={durationTime}
							offset={offset}
							className="jsNavBtn"
						>
							<img src="kashinomilogo2.svg" alt="かしのみロゴ" />
						</Link>
					</li>
					<li>
						<Link
							onClick={handleSliderActive}
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
							onClick={handleSliderActive}
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
							onClick={handleSliderActive}
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
							onClick={handleSliderActive}
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
			</div>
			<div
				onClick={handleSliderActive}
				className={`header_nav_sp_toggle ${
					isSliderActive ? "header_nav_sp_toggle-active" : ""
				}`}
			></div>
		</div>
	);
};

export default HeaderNavSp;
