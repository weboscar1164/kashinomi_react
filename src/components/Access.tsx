import { useFadeIn } from "../app/hooks/useFadeIn";

const Access = () => {
	const { refs, visibleIndexes } = useFadeIn(0.3);

	return (
		<section id="access" className="access">
			<div
				ref={(el) => (refs.current[0] = el)}
				className={`fade_in_section_up ${
					visibleIndexes.includes(0) ? "visible" : ""
				}`}
			>
				<h2 className="section_title section_title_white">アクセス</h2>
				<div className="section_title_underline">
					<img src="kashinomiicon.svg" alt="" />
				</div>
			</div>

			<div className="access_container">
				<div
					ref={(el) => (refs.current[1] = el)}
					className={`access_header fade_in_section_up ${
						visibleIndexes.includes(1) ? "visible" : ""
					}`}
				>
					<p className="access_header_text">
						〒071-8143
						<br />
						旭川市春光台3条5丁目2-20
						<br />
						TEL 090-7055-0122
					</p>
					<p className="access_header_img">
						<img src="access.jpg" alt="黄色い外壁と看板が目印です" />
					</p>
				</div>

				<div
					ref={(el) => (refs.current[2] = el)}
					className={`access_map fade_in_section_up ${
						visibleIndexes.includes(2) ? "visible" : ""
					}`}
				>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.664765196962!2d142.3602124418524!3d43.82131255838919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b3c40088cb02f25!2z6I-T5a2Q5bel5oi_44GL44GX44Gu44G_44O744GL44GX44Gu44G_44Kr44OV44Kn!5e0!3m2!1sja!2sjp!4v1620561877504!5m2!1sja!2sjp"
						width="580"
						height="410"
						style={{ border: "0" }}
						allowFullScreen
						loading="lazy"
					></iframe>
				</div>
			</div>
		</section>
	);
};

export default Access;
