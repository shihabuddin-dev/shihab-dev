import { useState } from "react";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { FaUser, FaTools, FaProjectDiagram, FaBlog, FaEnvelope } from "react-icons/fa";
// import  from '../../assets/resume.pdf';

const Navbar = () => {
    const resume = "https://drive.google.com/file/d/1tjs39OnNDDm02-tUt78LK120ePUsZDmq/view?usp=sharing"
    
    const [isOpen, setIsOpen] = useState(false);

    // Add icon property to each nav link
    const navLinks = [
        { name: "About", path: "/about", icon: <FaUser className="inline" /> },
        { name: "Skills", path: "/skills", icon: <FaTools className="inline" /> },
        { name: "Projects", path: "/projects", icon: <FaProjectDiagram className="inline" /> },
        { name: "Blog", path: "/blog", icon: <FaBlog className="inline" /> },
        { name: "Contact", path: "/contact", icon: <FaEnvelope className="inline " /> },
    ];
    const linkClass = "hover:text-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/60 flex items-center gap-2 rounded-md btn btn-outline bg-transparent border-none hover:bg-primary hover:text-white hover:btn-primary hover:scale-110 hover:shadow-lg";

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="backdrop-blur-xl bg-gradient-to-t from-primary/2 via-base-100/50 to-primary/8 fixed top-0 left-0 w-full z-50 border-b border-dashed border-primary/30">
            <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="w-12 h-10 md:h-12">
                    <Logo />
                </div>
                {/* Nav links - large screens */}
                <ul className="hidden lg:flex gap-1 text-sm font-medium border-0">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={`#${link.path}`} className={linkClass}>
                                {link.icon}
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* Buttons - large screens */}
                <div className="hidden lg:flex items-center gap-4">
                    <ThemeToggle />
                    <Button variant="primary"><a href={resume} download>RESUME</a></Button>
                </div>

                {/* Hamburger - small screens */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(true)} className="py-2 px-2 bg-primary rounded-sm text-lg">
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            <div
                className={`lg:hidden backdrop-blur-xl bg-gradient-to-t from-primary/2 via-base-100/50 to-primary/8 border-b border-dashed border-primary/30 text-base-content fixed top-0 left-0 h-full w-full z-50 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="p-6 space-y-3 backdrop-blur-xl bg-base-100 h-auto border-b border-dashed border-primary/30">

                    {/* Close button */}
                    <button
                        className="py-2 px-2 rounded-sm text-2xl absolute top-4 right-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <IoIosClose className="text-3xl font-bold" />
                    </button>

                    {/* Logo */}
                    <div className="w-12 h-12"
                        onClick={handleLinkClick}>
                        <Logo />
                    </div>

                    {/* Nav links */}
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={`#${link.path}`}
                                    className={linkClass}
                                    onClick={handleLinkClick}
                                >
                                    {link.icon}
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Resume & Theme Toggle */}
                    <div className="flex justify-center items-center gap-4">
                        <ThemeToggle />
                        <Button onClick={handleLinkClick} variant="primary">
                            <a href={resume} download>RESUME</a>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
