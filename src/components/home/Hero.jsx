import Lottie from 'lottie-react';
import coding from '../../assets/lottis/coding.json'
import Button from '../ui/Button';
import { Typewriter } from 'react-simple-typewriter';
import AnimatedSocialIcon from '../shared/AnimatedSocialIcon';

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:rellative">
            {/* Left: Text Content */}
            <div className="flex flex-col items-start gap-3 md:gap-4">
                <p className="text-primary text-lg font-semibold">Hello! I am</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-base-content">
                    Shihab <span className="text-primary">Uddin</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-base-content/80">
                    <Typewriter
                        words={['MERN Stack Developer', 'Learning TypeScript & Next.js', 'Tech Enthusiast', 'Continious Learner!']}
                        loop={100}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={50}
                    /></h2>
                <p className="text-base md:text-lg text-base-content/70 max-w-xl">
                    I build modern web applications with a focus on performance, accessibility, and great user experience. Let's create something amazing together!
                </p>
                {/* Social Row*/}
                <AnimatedSocialIcon />
                <div className="flex gap-2 md:gap-4 mt-2">
                    <Button>   <a href="#contact">Contact Me</a></Button>
                    <Button variant='outline'>      <a href="/resume.pdf" download>Get Resume</a></Button>
                </div>
            </div>


            {/* Right: Lottie Animation */}
            <div>
                <Lottie animationData={coding} className="w-full h-[220px] md:h-[350px]" />
            </div>
        </section>
    );
};

export default Hero;