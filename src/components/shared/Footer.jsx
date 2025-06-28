import { FaStar, FaCodeBranch, FaHeart, } from "react-icons/fa";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const thanks = [
    { text: "Thanks" },
    { text: "ধন্যবাদ" },
    { text: "شکریہ" },
];

export default function Footer() {
    const handleGoToTop = () => {
        window.scrollTo(0, 0)
        return;
    }
    return (
        <footer
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6 px-6 mb-1">
            {/* Left: Thanks cards */}
            <div className="flex gap-4">
                {thanks.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center "
                    >
                        <span className="font-medium border-b-2 border-primary drop-shadow-md text-base-content/90">{item.text}</span>

                    </div>
                ))}
            </div>
            {/* Middle Me */}
            <div className="flex items-center gap-2 ">Made With <FaHeart className="text-primary animate-pulse" />
                SHIHAB UDDIN</div>
            {/* Right: Star, Fork */}
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="flex items-center gap-3">
                    <a href="https://github.com/shihabuddin-dev/shihab-dev" target="blank" className="flex items-center gap-0.5"> <FaStar className="text-md" />
                        <span>Star</span></a>
                    <a href="https://github.com/shihabuddin-dev/shihab-dev" target="blank" className="flex items-center gap-0.5"> 
    
                    <FaCodeBranch className="text-md" />
                    <span>Fork</span>
                        </a>

                </div>
                <button onClick={handleGoToTop} className="btn btn-primary btn-xs">
                    <MdOutlineKeyboardArrowUp
                        className="text-xl" />
                </button>
            </div>

        </footer>
    );
}