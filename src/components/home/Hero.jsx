import Lottie from 'lottie-react';
import coding from '../../assets/lottis/coding.json'
import Button from '../ui/Button';
import { FaLinkedin, FaGithub, FaFacebook, FaDiscord, FaStackOverflow } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-6 md:py-12">
            {/* Left: Text Content */}
            <div className="flex flex-col items-start gap-4">
                <p className="text-primary text-lg font-semibold">Hello! I am</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-base-content">
                    Shihab <span className="text-primary">Uddin</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-base-content/80">Full Stack Developer &amp; Tech Enthusiast</h2>
                <p className="text-base md:text-lg text-base-content/70 max-w-xl">
                    I build modern web applications with a focus on performance, accessibility, and great user experience. Let's create something amazing together!
                </p>
                <div className="flex gap-4 mt-2 text-2xl">
                    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-200 hover:scale-125 hover:shadow-lg hover:shadow-primary/60 rounded-full"><FaLinkedin /></a>
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-200 hover:scale-125 hover:shadow-lg hover:shadow-primary/60 rounded-full"><FaGithub /></a>
                    <a href="https://facebook.com/your-facebook" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-200 hover:scale-125 hover:shadow-lg hover:shadow-primary/60 rounded-full"><FaFacebook /></a>
                    <a href="https://discord.com/users/your-discord" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-200 hover:scale-125 hover:shadow-lg hover:shadow-primary/60 rounded-full"><FaDiscord /></a>
                    <a href="https://stackoverflow.com/users/your-stackoverflow" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-200 hover:scale-125 hover:shadow-lg hover:shadow-primary/60 rounded-full"><FaStackOverflow /></a>
                </div>
                <div className="flex gap-4 mt-2">
                    <Button>   <a href="#contact">Contact Me</a></Button>
                    <Button variant='outline'>      <a href="/resume.pdf" download>Get Resume</a></Button>
                </div>
            </div>
            {/* Right: Lottie Animation */}
            <div>
                <Lottie animationData={coding} className="w-full h-[250px] md:h-[350px]" />
            </div>
        </section>
    );
};

export default Hero;