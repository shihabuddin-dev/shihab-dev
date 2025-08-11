import About from '../../components/home/About';
import Contact from '../../components/home/Contact';
import Hero from '../../components/home/Hero';
import Projects from '../../components/home/Projects';
import Skills from '../../components/home/Skills';
import Test from '../../components/home/Test';

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-20 space-y-20 md:space-y-32">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Test/>
        </div>
    );
};

export default Home;