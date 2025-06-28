import About from '../../components/home/About';
import Hero from '../../components/home/Hero';

const Home = () => {
    return (
        <div className='py-12 md:py-18 space-y-16 md:space-y-24 max-w-5xl mx-auto px-4'>
            <Hero />
            <About/>
        </div>
    );
};

export default Home;