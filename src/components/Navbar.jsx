import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/Nf_1.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const SocialMediaLinks = () => {
    return <>
        <a href="https://www.linkedin.com/in/irfan-putranto-pratama-b45b55276/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
        </a>
        <a href="https://github.com/irfanputranto" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
        <a href="https://www.instagram.com/irfan_putranto/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
        </a>
        {/* <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
        </a> */}
    </>
}

const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="Logo" className="mx-2 w-10" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <SocialMediaLinks />
        </div>
    </nav>;
}

export default Navbar
