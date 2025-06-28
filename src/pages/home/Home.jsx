import About from '../../components/home/About';
import Hero from '../../components/home/Hero';
import Skills from '../../components/home/Skills';

const Home = () => {
    return (
        <div className='py-12 md:py-18 space-y-24 md:space-y-32 max-w-5xl mx-auto px-4'>
            <Hero />
            <About />
            <Skills />
        </div>
    );
};

export default Home;