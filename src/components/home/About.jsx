import SectionHeading from '../shared/SectionHeading';
import shihab from '../../assets/shihab.jpg';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const skills = [
    "JavaScript", "React.js", "Node.js", "MongoDB",
    "Express.js", "Tailwind CSS",
    "Git & GitHub", "REST APIs", "JWT",
];

const About = () => {
    return (
        <section className="bg-gradient-to-b from-base-100 to-base-200/20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <SectionHeading>About Me</SectionHeading>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-6 md:mt-10">
                
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="relative max-w-sm mx-auto lg:max-w-md">
                        {/* Background decoration */}
                        <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl opacity-60"></div>
                        
                        {/* Image container */}
                        <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-2xl shadow-2xl">
                            <img
                                src={shihab}
                                alt="Shihab Uddin - MERN Stack Developer"
                                className="w-full h-76 md:h-120 object-cover rounded-md shadow-lg grayscale-80 hover:grayscale-0"
                            />
                        </div>
                        
                        {/* Floating badge */}
                        <motion.div 
                            className="absolute -bottom-2 -right-2 md:-right-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button >
                                Available for hire
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-8 order-1 lg:order-2"
                >
                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <motion.div 
                            className="space-y-4 text-base md:text-lg text-base-content/70"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                            >
                                Hello! I'm <strong className="text-base-content">Shihab Uddin</strong>, a passionate MERN Stack Developer
                                focused on creating innovative web solutions and user-friendly interfaces.
                            </motion.p>
                            
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                            >
                                I specialize in building scalable applications using modern technologies. 
                                I'm constantly learning and staying updated with the latest industry trends 
                                to deliver cutting-edge solutions.
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                    >
                        <motion.h3 
                            className="text-xl font-semibold text-base-content flex items-center gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.6 }}
                        >
                            <motion.span 
                                className="w-1 h-6 bg-primary rounded-full"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.6, delay: 1.8 }}
                            ></motion.span>
                            Technologies I work with:
                        </motion.h3>
                        <motion.div 
                            className="flex flex-wrap gap-2 md:gap-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 2.0 }}
                        >
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.4, 
                                        delay: 2.2 + (index * 0.1),
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{ 
                                        scale: 1.1, 
                                        y: -3,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-1.5 bg-base-200 hover:bg-primary hover:text-primary-content rounded-full text-sm font-medium transition-all duration-100 cursor-default shadow-sm hover:shadow-md"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;