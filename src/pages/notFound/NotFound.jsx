import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FaHome, FaArrowLeft, FaSearch, FaRocket, FaSadTear } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';
import Button from '../../components/ui/Button';

const NotFound = () => {
    const floatingElements = [
        { icon: '🚀', delay: 0 },
        { icon: '💻', delay: 0.5 },
        { icon: '⚡', delay: 1 },
        { icon: '🎯', delay: 1.5 },
        { icon: '🌟', delay: 2 },
        { icon: '🔥', delay: 2.5 }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200/50 to-base-100 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Floating Background Elements */}
            {floatingElements.map((element, index) => (
                <motion.div
                    key={index}
                    className="absolute text-4xl opacity-10"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        rotate: 0
                    }}
                    animate={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        rotate: 360
                    }}
                    transition={{
                        duration: 20 + Math.random() * 10,
                        repeat: Infinity,
                        delay: element.delay,
                        ease: "linear"
                    }}
                >
                    {element.icon}
                </motion.div>
            ))}

            {/* Main Content */}
            <div className="max-w-2xl mx-auto text-center relative z-10">
                {/* 404 Number */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="mb-6"
                >
                    <h1 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                        404
                    </h1>
                </motion.div>

                {/* Error Icon */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-4"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 rounded-full border-2 border-red-500/30">
                        <BiError className="text-3xl text-red-500" />
                    </div>
                </motion.div>

                {/* Main Message */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-6"
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-base-content mb-3">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-base-content/70 text-base leading-relaxed">
                        Looks like this page decided to take a vacation!
                        Don't worry, let's get you back on track to explore amazing things.
                    </p>
                </motion.div>

                {/* Fun Animation */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                    className="mb-6"
                >
                    <div className="inline-flex items-center gap-2 text-xl">
                        <motion.div
                            animate={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        >
                            <FaSadTear className="text-yellow-500" />
                        </motion.div>
                        <span className="text-base-content/50">|</span>
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                        >
                            <FaRocket className="text-primary" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6"
                >
                    <Link to="/">
                        <Button className="flex items-center gap-2 px-5 py-2.5 text-sm">
                            <FaHome className="text-base" />
                            Go Home
                        </Button>
                    </Link>

                    <Button
                        variant='outline'
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 px-5 py-2.5 hover:bg-base-300 border border-base-300 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
                    >
                        <FaArrowLeft className="text-base" />
                        Go Back
                    </Button>
                </motion.div>

                {/* Search Suggestion */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="bg-base-200/50 backdrop-blur-sm rounded-xl p-4 border border-base-300/30"
                >
                    <h3 className="text-base font-semibold text-base-content mb-2 flex items-center justify-center gap-2">
                        <FaSearch className="text-primary" />
                        Can't find what you're looking for?
                    </h3>
                    <p className="text-base-content/70 text-xs mb-3">
                        Try navigating to one of these popular sections:
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {[
                            { name: 'About', path: '/#about' },
                            { name: 'Projects', path: '/#projects' },
                            { name: 'Skills', path: '/#skills' },
                            { name: 'Contact', path: '/#contact' }
                        ].map((section, index) => (
                            <Link
                                key={section.name}
                                to={section.path}
                                className="px-3 py-1.5 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-md text-xs font-medium text-primary transition-all duration-300 hover:scale-105"
                            >
                                {section.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Fun Fact */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="mt-6 p-3 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20"
                >
                    <p className="text-xs text-base-content/60 italic">
                        💡 Fun fact: The first 404 error was created in 1990.
                        Even back then, developers were making pages disappear! 😄
                    </p>
                </motion.div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-primary/30 rounded-tl-2xl"></div>
            <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-primary/30 rounded-tr-2xl"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-primary/30 rounded-bl-2xl"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-primary/30 rounded-br-2xl"></div>
        </div>
    );
};

export default NotFound;
