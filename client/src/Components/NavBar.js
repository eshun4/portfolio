import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// FaFacebook, FaLinkedin, FaInstagram
import { Link } from "react-router-dom";

function Nav() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3 className="logo">Kofi Junior Eshun</h3>
			<nav ref={navRef}>
				<Link to="/">Home</Link>
				<Link to="/education">Education</Link>
				<Link to="/projects">Projects</Link>
				{/* <Link to="/tools">Tools</Link>
                <Link to="/ethics">Ethics</Link>
                <Link to="/resume">Resume/CV</Link>                 */}
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