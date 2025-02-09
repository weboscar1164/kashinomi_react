const HeaderLink = () => {
	return (
		<div className="header_link">
			<ul>
				<li className="header_link_icon">
					<a
						href="https://www.instagram.com/kashinomi_cafe/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="instaicon-white.svg" alt="" />
					</a>
				</li>
				<li className="header_link_icon">
					<a
						href="https://www.facebook.com/kashinomicake/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="fbicon-white.svg" alt="" />
					</a>
				</li>
				<li className="header_link_icon header_link_phone_sp">
					<a href="tel:09070550122">
						<img src="phoneicon.svg" alt="" />
					</a>
				</li>
				<li className="header_link_phone_pc">
					<p>TEL 090-7055-0122</p>
				</li>
			</ul>
		</div>
	);
};

export default HeaderLink;
