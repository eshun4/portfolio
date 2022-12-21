import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// FaFacebook, FaLinkedin, FaInstagram


function Nav() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3 className="logo">Kofi Junior Eshun</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Education</a>
				<a href="/#">Projects</a>
				<a href="/#">Tools</a>
                <a href="/#">Ethics</a>
                <a href="/#">Resume/CV</a>                
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Nav;