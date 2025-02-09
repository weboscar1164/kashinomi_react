import { useEffect, useState } from "react";

// カルーセル一覧
const slides = [
	{ src: "mv1.jpg", alt: "スライド1" },
	{ src: "mv2.jpg", alt: "スライド2" },
	{ src: "mv3.jpg", alt: "スライド3" },
	{ src: "mv4.jpg", alt: "スライド4" },
	{ src: "mv5.jpg", alt: "スライド5" },
];

const Mainvisual = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);

	useEffect(() => {
		// カルーセル制御
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section id="mainvisual" className="mainvisual">
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`sld mainvisual_bg ${
						index === currentSlide ? "active" : ""
					}`}
					style={{ backgroundImage: `url(${slide.src})` }}
				></div>
			))}
			<img className="mainvisual_img" src="kashinomilogo1.svg" alt="" />
			<div className="mainvisual_scroll">scroll</div>
		</section>
	);
};

export default Mainvisual;
