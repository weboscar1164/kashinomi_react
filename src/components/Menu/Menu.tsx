import { useRef } from "react";
import { useFadeIn } from "../../app/hooks/useFadeIn";
import ScrollHint from "./ScrollHint";

const Menu = () => {
	const { refs, visibleIndexes } = useFadeIn(0.3);
	const scrollableRef = useRef<HTMLDivElement>(null);
	return (
		<section id="menu" className="menu">
			<div
				ref={(el) => (refs.current[0] = el)}
				className={`fade_in_section_up ${
					visibleIndexes.includes(0) ? "visible" : ""
				}`}
			>
				<h2 className="section_title">予約販売メニュー</h2>
				<div className="section_title_underline">
					<img src="kashinomiicon2.svg" alt="" />
				</div>
				<p className="menu_text">
					お電話でご注文ください。
					<br />
					価格表示は税込みです。
					<br />
					毎週土曜日は店頭にて
					<br className="br_sm" />
					小物ケーキを販売いたします。
					<br />
				</p>
				<p className="menu_text_notice">
					（店頭に並ぶケーキは季節によって変わります。）
				</p>
			</div>

			<div
				ref={(el) => (refs.current[1] = el)}
				className={`fade_in_section_up ${
					visibleIndexes.includes(1) ? "visible" : ""
				}`}
			>
				<div className="menu_decoration">
					<p className="menu_decoration_img">
						<img src="decoration.jpg" alt="デコレーションケーキ" />
					</p>
					<h3 className="menu_decoration_title">
						<span>デコレーションケーキ</span>
					</h3>
					<p className="menu_decoration_text">
						記念日やお祝いに、
						<br />
						かしのみのオリジナル
						<br />
						デコレーションケーキはいかがですか。
					</p>
				</div>

				<div
					ref={(el) => (refs.current[2] = el)}
					className={`fade_in_section_up ${
						visibleIndexes.includes(2) ? "visible" : ""
					}`}
				>
					<div ref={scrollableRef} className="menu_decoration_plan">
						<ScrollHint targetRef={scrollableRef} />
						<table>
							<tbody>
								<tr>
									<th></th>
									<td>
										4号 12cm<span>2～4人分</span>
									</td>
									<td>
										5号15cm<span>4～6人分</span>
									</td>
									<td>
										6号 18cm<span>6～10人分</span>
									</td>
								</tr>
								<tr>
									<th>生デコレーション</th>
									<td>3,000円</td>
									<td>4,100円</td>
									<td>4,900円</td>
								</tr>
								<tr>
									<th>チョコ生デコレーション</th>
									<td>3,100円</td>
									<td>4,200円</td>
									<td>5,100円</td>
								</tr>
								<tr>
									<th>フルーツデコレーション</th>
									<td>3,400円</td>
									<td>4,500円</td>
									<td>5,700円</td>
								</tr>
							</tbody>
						</table>
					</div>
					<ul className="menu_decoration_notice">
						<li>※オーダー内容によりデコレーションはその都度異なります。</li>
						<li>※ローソクとメッセージプレートをお付けいたします。</li>
						<li>※スポンジに苺をサンドした場合多少金額が異なります。</li>
						<li>※ご希望により7号21cmサイズもご用意いたします。</li>
					</ul>
				</div>
			</div>

			<div className="menu_container">
				<div
					ref={(el) => (refs.current[3] = el)}
					className={`menu_item fade_in_section_right ${
						visibleIndexes.includes(3) ? "visible" : ""
					}`}
				>
					<p className="menu_item_img">
						<img src="menu1.jpg" alt="ロールケーキデコ" />
					</p>
					<div className="menu_item_text">
						<h3 className="menu_item_text_title">ロールケーキデコ</h3>
						<p className="menu_item_text_desc">
							西神楽の米農家
							<a
								href="https://www.yukihikari.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								「市川農場」
							</a>
							の米粉を使用したグルテンフリーのロールケーキです。
						</p>
						<dl className="menu_item_text_price">
							<dt>かしのみロール</dt>
							<dd>2,600円</dd>
						</dl>
						<dl className="menu_item_text_price">
							<dt>かしのみロールデコ</dt>
							<dd>3,200円</dd>
						</dl>
						<dl className="menu_item_text_price">
							<dt>苺ロールデコ</dt>
							<dd>3,500円</dd>
						</dl>
						<dl className="menu_item_text_price">
							<dt>抹茶ロールデコ</dt>
							<dd>3,700円</dd>
						</dl>
						<dl className="menu_item_text_price">
							<dt>チョコ生ロールデコ</dt>
							<dd>3,500円</dd>
						</dl>
						<dl className="menu_item_text_price">
							<dt>ティラミスロールデコ</dt>
							<dd>3,600円</dd>
						</dl>
						<dl className="menu_item_text_price">
							<dt>黒米フルーツロールデコ</dt>
							<dd>3,800円</dd>
						</dl>
						<p className="menu_item_text_size">
							(1本/19cm・かしのみロール以外はデコレーション価格)
						</p>
					</div>
				</div>

				<div
					ref={(el) => (refs.current[4] = el)}
					className={`menu_item fade_in_section_left ${
						visibleIndexes.includes(4) ? "visible" : ""
					}`}
				>
					<p className="menu_item_img">
						<img src="menu2.jpg" alt="タルト" />
					</p>
					<div className="menu_item_text">
						<h3 className="menu_item_text_title">タルト</h3>
						<p className="menu_item_text_desc">
							いちごは地元東鷹栖「大田のうえん」のいちごを使用しております。
						</p>
						<dl className="menu_item_text_price">
							<dt>フルーツタルト</dt>
							<dd>4,500円</dd>
						</dl>
						<dl className="menu_item_text_price">
							<dt>苺タルト</dt>
							<dd>4,200円</dd>
						</dl>
						<dl className="menu_item_text_price">
							<dt>チョコタルト</dt>
							<dd>3,400円</dd>
						</dl>
						<dl className="menu_item_text_price">
							<dt>チーズタルト</dt>
							<dd>3,400円</dd>
						</dl>
						<dl className="menu_item_text_price">
							<dt>
								パンプキンタルト
								<br />
								（季節限定）
							</dt>
							<dd>3,300円</dd>
						</dl>
						<p className="menu_item_text_size">
							(1ホール/18cm・デコレーション込みの価格)
						</p>
					</div>
				</div>

				<div
					ref={(el) => (refs.current[5] = el)}
					className={`menu_item fade_in_section_right ${
						visibleIndexes.includes(5) ? "visible" : ""
					}`}
				>
					<p className="menu_item_img">
						<img src="menu3.jpg" alt="チーズケーキ" />
					</p>
					<div className="menu_item_text">
						<h3 className="menu_item_text_title">チーズケーキ</h3>
						<p className="menu_item_text_desc">
							滑らかで濃厚なチーズケーキです。
						</p>
						<dl className="menu_item_text_price">
							<dt>マスカルポーネチーズケーキ</dt>
							<dd>4,300円</dd>
						</dl>
						<dl className="menu_item_text_price">
							<dt>ベイクドチーズケーキ</dt>
							<dd>4,300円</dd>
						</dl>
						<dl className="menu_item_text_price">
							<dt>レアチーズケーキ</dt>
							<dd>4,200円</dd>
						</dl>
						<p className="menu_item_text_size">
							(1ホール/18cm・デコレーション込みの価格)
						</p>
					</div>
				</div>

				<div
					ref={(el) => (refs.current[6] = el)}
					className={`menu_item fade_in_section_left ${
						visibleIndexes.includes(6) ? "visible" : ""
					}`}
				>
					<p className="menu_item_img">
						<img src="menu4.jpg" alt="その他のデコレーション" />
					</p>
					<div className="menu_item_text">
						<h3 className="menu_item_text_title">その他のデコレーション</h3>
						<p className="menu_item_text_desc">
							ムースケーキやガトーショコラ、モンブランなど、定番のケーキも取り揃えております。
						</p>
						<dl className="menu_item_text_price">
							<dt>
								カシスムースデコ <br className="br_sm" />
								(1ホール/18cm)
							</dt>
							<dd>4,300円</dd>
						</dl>
						<dl className="menu_item_text_price">
							<dt>
								ガトーショコラデコ <br className="br_sm" />
								(1ホール/15cm)
							</dt>
							<dd>3,700円</dd>
						</dl>
						<dl className="menu_item_text_price">
							<dt>
								モンブランデコ <br className="br_sm" />
								(季節限定・1ホール/16cm)
							</dt>
							<dd>4,800円</dd>
						</dl>
						<p className="menu_item_text_size">(デコレーション込みの価格)</p>
					</div>
				</div>

				<div
					ref={(el) => (refs.current[7] = el)}
					className={`menu_item fade_in_section_right ${
						visibleIndexes.includes(7) ? "visible" : ""
					}`}
				>
					<p className="menu_item_img">
						<img src="menu5.jpg" alt="シフォンケーキ" />
					</p>
					<div className="menu_item_text">
						<h3 className="menu_item_text_title">シフォンケーキ</h3>
						<p className="menu_item_text_desc">
							ふわふわの食感が楽しめるシフォンケーキです。
						</p>
						<dl className="menu_item_text_price">
							<dt>牛乳シフォンデコ</dt>
							<dd>3,500円</dd>
						</dl>
						<dl className="menu_item_text_price">
							<dt>珈琲シフォンデコ</dt>
							<dd>3,800円</dd>
						</dl>
						<dl className="menu_item_text_price">
							<dt>
								野菜シフォンデコ
								<br />
								<span>ほうれん草・にんじん・ かぼちゃ・よもぎ（季節限定）</span>
							</dt>
							<dd>3,800円</dd>
						</dl>
						<p className="menu_item_text_size">(1ホール/20cm)</p>
					</div>
				</div>

				<div
					ref={(el) => (refs.current[8] = el)}
					className={`menu_item fade_in_section_left ${
						visibleIndexes.includes(8) ? "visible" : ""
					}`}
				>
					<p className="menu_item_img">
						<img src="menu6.jpg" alt="焼菓子" />
					</p>
					<div className="menu_item_text">
						<h3 className="menu_item_text_title">焼菓子</h3>
						<p className="menu_item_text_desc">
							グルテンフリーの焼き菓子です。ご希望金額に合わせた詰め合わせも行っております。
						</p>
						<ul className="menu_item_text_list">
							<li>ライスガレット</li>
							<li>ギモーブ（ハスカップ）</li>
							<li>プレーンクッキー</li>
							<li>てんさい塩くん</li>
							<li>チーズペンギン</li>
							<li>ブラックココアクッキー</li>
							<li>こめチョコクッキー</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Menu;
