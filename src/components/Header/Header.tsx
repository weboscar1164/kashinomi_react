import HeaderLink from "./HeaderLink";
import HeaderLogo from "./HeaderLogo";
import HeaderNavPc from "./HeaderNavPc";
import HeaderNavSp from "./HeaderNavSp";

const Header = () => {
	return (
		<header className="header">
			<div className="header_container">
				<HeaderLogo />
				<HeaderNavPc />
				<HeaderLink />
				<HeaderNavSp />
			</div>
		</header>
	);
};

export default Header;
