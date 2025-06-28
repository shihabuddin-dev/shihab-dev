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
            <SectionHeading>About Me</SectionHeading>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-10">

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
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
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-8 order-1 lg:order-2"
                >
                    <div className="space-y-6">

                        <div className="space-y-4 text-base md:text-lg text-base-content/70">
                            <p>
                                Hello! I'm <strong className="text-base-content">Shihab Uddin</strong>, a passionate MERN Stack Developer
                                focused on creating innovative web solutions and user-friendly interfaces.
                            </p>

                            <p>
                                I specialize in building scalable applications using modern technologies.
                                I'm constantly learning and staying updated with the latest industry trends
                                to deliver cutting-edge solutions.
                            </p>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-base-content flex items-center gap-2">
                            <span className="w-1 h-6 bg-primary rounded-full"></span>
                            Technologies I work with:
                        </h3>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-4 py-1.5 bg-base-200 hover:bg-primary hover:text-primary-content rounded-full text-sm font-medium transition-all duration-100 cursor-default shadow-sm hover:shadow-md"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>


                </motion.div>
            </div>

        </section>
    );
};

export default About;