import { useState } from "react";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/Projects" },
        { name: "Contact", path: "/contact" },
    ];
    const linkClass = "hover:text-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/60"

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="backdrop-blur-xl bg-gradient-to-t from-primary/2 via-base-100/50 to-primary/8 fixed top-0 left-0 w-full z-50 border-b border-dashed border-primary/30">
            <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="w-12 h-12">
                    <Logo />
                </div>
                {/* Nav links - large screens */}
                <ul className="hidden lg:flex gap-6 text-sm font-medium tracking-wider">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={`#${link.path}`} className={linkClass}>
                                {link.name}
                            </a>
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
                                <a
                                    href={`#${link.path}`}
                                    className={linkClass}
                                    onClick={handleLinkClick}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Resume & Theme Toggle */}
                    <div className="space-y-3">
                        <Button variant="outline">
                            Resume
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
