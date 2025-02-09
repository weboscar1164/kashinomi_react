import { useFadeIn } from "../../app/hooks/useFadeIn";

const Info = () => {
	const { refs, visibleIndexes } = useFadeIn(0.3);

	return (
		<section id="info" className="info">
			<div
				ref={(el) => (refs.current[0] = el)}
				className={`fade_in_section_up ${
					visibleIndexes.includes(0) ? "visible" : ""
				}`}
			>
				<h2 className="section_title">営業時間</h2>
				<div className="section_title_underline">
					<img src="kashinomiicon2.svg" alt="" />
				</div>
			</div>

			<div className="info_container">
				<div
					ref={(el) => (refs.current[1] = el)}
					className={`fade_in_section_up ${
						visibleIndexes.includes(1) ? "visible" : ""
					}`}
				>
					<div className="info_wrapper">
						<dl className="info_wrapper_item">
							<dt>営業時間</dt>
							<dd>11：00～18：00</dd>
						</dl>
						<dl className="info_wrapper_item">
							<dt>定休日</dt>
							<dd>日曜日・月曜日（不定休あり）</dd>
						</dl>
						<dl className="info_wrapper_item">
							<dt>ご予約ホールケーキお渡し</dt>
							<dd>火曜日・水曜日・木曜日・金曜日・土曜日</dd>
						</dl>
						<dl className="info_wrapper_item">
							<dt>小物ケーキ販売＆お家カフェ営業</dt>
							<dd>土曜日</dd>
						</dl>
					</div>

					<p className="info_text">
						毎週土曜日（第２土曜日のぞく）は
						<a
							href="https://www.facebook.com/chilupan/"
							target="_blank"
							rel="noopener noreferrer"
						>
							chilu
						</a>
						さんのパンがお店に並びます。
						<br className="br_sm" />
						ぜひご覧ください。
					</p>
					<p className="info_notice">
						※おうちカフェは完全予約制です。
						<br className="br_sm" />
						お電話にてお問い合わせください。
					</p>
				</div>

				<div
					ref={(el) => (refs.current[2] = el)}
					className={`fade_in_section_up ${
						visibleIndexes.includes(2) ? "visible" : ""
					}`}
				>
					<p className="info_sns_text">
						最新の情報は
						<br className="br_sm" />
						instagramとfacebookに
						<br className="br_sm" />
						アップしております。
						<br />
						ぜひご覧ください。
					</p>

					<div className="info_sns_qr">
						<a
							href="https://www.instagram.com/kashinomi_cafe/"
							className="info_sns_qr_item"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src="instagramQR.png" alt="インスタグラムへのリンク" />
						</a>
						<a
							href="https://www.facebook.com/kashinomicake/"
							className="info_sns_qr_item"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src="facebookQR.png" alt="フェイスブックへのリンク" />
						</a>
					</div>

					<div className="info_sns_btn">
						<a
							href="https://www.instagram.com/kashinomi_cafe/"
							className="info_sns_btn_item"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src="instaicon-colord.svg" alt="" />
						</a>
						<a
							href="https://www.facebook.com/kashinomicake/"
							className="info_sns_btn_item"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src="fbicon-colord.svg" alt="" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Info;
