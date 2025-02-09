import { useFadeIn } from "../app/hooks/useFadeIn";
const Intro = () => {
	const { refs, visibleIndexes } = useFadeIn(0.3);
	return (
		<section id="intro" className="intro">
			<div
				ref={(el) => (refs.current[0] = el)}
				className={`fade_in_section_up ${
					visibleIndexes.includes(0) ? "visible" : ""
				}`}
			>
				<h2 className="section_title section_title_white">
					旭川春光台の
					<br className="br_sm" />
					"米粉スイーツ専門店"
				</h2>
				<div className="section_title_underline">
					<img src="kashinomiicon.svg" alt="" />
				</div>
				<p className="intro_text">
					旭川市春光台の住宅街にある小さなお店です。
					<br />
					予約販売を中心に営業しておりますが、
					<br />
					土曜日には小物ケーキの店頭販売と
					<br />
					カフェスペースを開放（要予約）しております。
					<br />
					旭川産米粉（ゆきひかり・北瑞穂）、
					<br />
					地元の食材をふんだんに使った
					<br />
					体に優しいスイーツをぜひご賞味ください。
				</p>
			</div>
		</section>
	);
};

export default Intro;
