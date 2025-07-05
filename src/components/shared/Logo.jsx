import { useNavigate } from "react-router";

const Logo = () => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('/')} className=" w-10 md:w-12 h-10 md:h-12 bg-primary flex items-center justify-center clip-hexagon font-semibold text-[27px] cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-primary/60 ">
            S
        </div>
    );
};

export default Logo;