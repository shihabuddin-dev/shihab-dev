import { useState } from "react";
import { Link } from "react-router";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "ABOUT", path: "/about" },
        { name: "SKILL", path: "/skill" },
        { name: "PORTFOLIO", path: "/portfolio" },
        { name: "CONTACT", path: "/contact" },
        { name: "BLOG", path: "/blog" },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="px-4 py-2 md:py-4 flex items-center justify-between relative max-w-6xl mx-auto">
            {/* Logo */}
            <div className="w-12 h-12">
                <Logo />
            </div>

            {/* Nav links - large screens */}
            <ul className="hidden lg:flex gap-6 text-sm font-medium tracking-wider">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link to={link.path} className="hover:text-primary">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Buttons - large screens */}
            <div className="hidden lg:flex items-center gap-3">
                <Button variant="outline">RESUME</Button>
                <ThemeToggle />
            </div>

            {/* Hamburger - small screens */}
            <div className="lg:hidden">
                <button onClick={() => setIsOpen(true)} className="py-2 px-2 bg-primary rounded-sm text-lg text-black">
                    <GiHamburgerMenu />
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`lg:hidden text-base-content fixed top-0 left-0 h-full w-full bg-base-100 z-50 transition-transform duration-300 text-center ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="p-6 space-y-6">

                    {/* Close button */}
                    <button
                        className="py-2 px-2 rounded-sm text-2xl absolute top-4 right-4"
                        onClick={() => setIsOpen(false)}
                    >

                        <IoIosClose className="text-3xl font-bold" />
                    </button>

                    {/* Logo */}
                    <div className="w-12 h-12">
                        <Logo />
                    </div>

                    {/* Nav links */}
                    <ul className="flex flex-col gap-4 text-sm font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className="hover:text-primary"
                                    onClick={handleLinkClick}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Resume & Theme Toggle */}
                    <div className="space-y-3">
                        <Button variant="outline">
                            RESUME
                        </Button>
                        {/* <Button> <ThemeToggle/></Button> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
