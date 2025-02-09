import { useFadeIn } from "../app/hooks/useFadeIn";

const Gallery = () => {
	const { refs, visibleIndexes } = useFadeIn(0.3);

	return (
		<section className="gallery">
			<div
				ref={(el) => (refs.current[0] = el)}
				className={`fade_in_section_up ${
					visibleIndexes.includes(0) ? "visible" : ""
				}`}
			>
				<h2 className="section_title section_title_white">お店の様子</h2>
				<div className="section_title_underline">
					<img src="kashinomiicon.svg" alt="" />
				</div>
			</div>

			<div className="gallery_container">
				{[
					{
						src: "gallery01.jpg",
						text: "静かな住宅街にあるお家カフェです。\n玄関からお入りください。",
					},
					{
						src: "gallery02.jpg",
						text: "カフェスペースは自宅の一室を開放した「おうちカフェ」です。",
					},
					{
						src: "gallery03.jpg?v=01",
						text: "毎週土曜日は小物ケーキ・焼き菓子の店頭販売を行なっております。",
					},
					{ src: "gallery04.jpg", text: "ご来店を心よりお待ちしております。" },
				].map((item, index) => (
					<div
						key={index}
						ref={(el) => (refs.current[index + 1] = el)}
						className={`gallery_item fade_in_section_up ${
							visibleIndexes.includes(index + 1) ? "visible" : ""
						}`}
					>
						<img src={item.src} alt="お店の様子" />
						<p>{item.text}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Gallery;
