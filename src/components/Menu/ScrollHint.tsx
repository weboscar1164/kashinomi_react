import { Fade } from "@mui/material";
import SwipeIcon from "@mui/icons-material/SwipeOutlined";
import { useEffect, useRef, useState } from "react";

const ScrollHint = ({
	targetRef,
}: {
	targetRef: React.RefObject<HTMLDivElement>;
}) => {
	const [showHint, setShowHint] = useState<boolean>(false);
	const observerRef = useRef<IntersectionObserver | null>(null);
	const timerRef = useRef<number | null>(null);
	const mutationObserverRef = useRef<MutationObserver | null>(null);

	const checkOverflow = () => {
		const el = targetRef.current;
		if (!el) return;

		const isScrollable = el.scrollWidth > el.clientWidth;
		if (isScrollable) {
			setShowHint(true);

			if (timerRef.current !== null) {
				clearTimeout(timerRef.current);
			}

			// 3秒後に非表示にする
			timerRef.current = window.setTimeout(() => setShowHint(false), 3000);
		}
	};

	useEffect(() => {
		const el = targetRef.current;
		if (!el) return;

		// "overflow"の監視
		mutationObserverRef.current = new MutationObserver(checkOverflow);
		mutationObserverRef.current.observe(el, {
			attributes: true,
			attributeFilter: ["style", "class"],
		});

		// intersectionObserver を設定
		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						checkOverflow();
					}
				});
			},
			{ threshold: 0.5 }
		);

		observerRef.current.observe(targetRef.current);

		return () => {
			mutationObserverRef.current?.disconnect();
			observerRef.current?.disconnect();
			if (timerRef.current !== null) {
				clearTimeout(timerRef.current);
			}
		};
	}, [targetRef]);

	return (
		<Fade in={showHint} timeout={1000}>
			<div className="menu_scroll_hint">
				スクロールできます。
				<br />
				<SwipeIcon className="menu_scroll_hint_icon" />
			</div>
		</Fade>
	);
};

export default ScrollHint;
