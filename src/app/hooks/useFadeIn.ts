import { useEffect, useState, useRef } from "react";

export const useFadeIn = (threshold = 0.3) => {
	const refs = useRef<(HTMLDivElement | null)[]>([]);
	const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = refs.current.indexOf(entry.target as HTMLDivElement);
						if (index != -1) {
							setVisibleIndexes((prev) => [...new Set([...prev, index])]);
						}
					}
				});
			},

			{ threshold }
		);

		// すべての要素を監視
		refs.current.forEach((el) => {
			if (el) observer.observe(el);
		});

		return () => {
			refs.current.forEach((el) => {
				if (el) observer.unobserve(el);
			});
			observer.disconnect();
		};
	}, [threshold]);

	return { refs, visibleIndexes };
};
