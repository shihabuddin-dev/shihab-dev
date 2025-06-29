import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaStackOverflow, FaFacebook, FaDiscord } from 'react-icons/fa';
import SectionHeading from '../shared/SectionHeading';
import Button from '../ui/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    // Load EmailJS script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.async = true;
        script.onload = () => {
            if (window.emailjs) {
                window.emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY); //  public key

            }
        };
        script.onerror = () => {
            console.error('Failed to load EmailJS');
        };
        document.head.appendChild(script);

        return () => {
            const existingScript = document.querySelector('script[src*="email.min.js"]');
            if (existingScript) {
                document.head.removeChild(existingScript);
            }
        };
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Check if EmailJS is properly configured
        if (!window.emailjs) {
            console.error('EmailJS not loaded');
            setSubmitStatus('error');
            setIsSubmitting(false);
            return;
        }

        try {

            // Send email using EmailJS
            const result = await window.emailjs.send(
                import.meta.env.VITE_EMAIL_SERVICE_ID, // EmailJS service ID
                import.meta.env.VITE_EMAIL_TEMPLATE_ID, // EmailJS template ID
                {
                    to_name: "Shihab Uddin",
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    reply_to: formData.email,
                    contact_number: formData.phone || "Not provided",
                    sender_info: `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
                }
            );

            console.log('Email sent successfully:', result);
            setSubmitStatus('success');

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <FaEnvelope className="text-2xl" />,
            title: "Email",
            value: "shihabuddin.dev@gmail.com",
            link: "mailto:shihabuddin.dev@gmail.com"
        },
        {
            icon: <FaPhone className="text-2xl" />,
            title: "Phone / Whatsapp",
            value: "+8801740520249",
            link: "tel:+8801740520249"
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl" />,
            title: "Location",
            value: "Bogura, Bangladesh",
        }
    ];
    const socialLinks = [
        {
            icon: <FaLinkedin className="text-xl" />,
            name: "LinkedIn",
            url: "https://linkedin.com/in/shihab-dev",
            color: "hover:text-primary"
        },
        {
            icon: <FaDiscord className="text-xl" />,
            name: "Discord",
            url: "https://discord.com/users/shihab.dev",
            color: "hover:text-primary"
        },
        {
            icon: <FaGithub className="text-xl" />,
            name: "GitHub",
            url: "https://github.com/shihabuddin-dev",
            color: "hover:text-primary"
        },
        {
            icon: <FaFacebook className="text-xl" />,
            name: "Facebook",
            url: "https://www.facebook.com/shihabuddinReal/",
            color: "hover:text-primary"
        },
        {
            icon: <FaStackOverflow className="text-xl" />,
            name: "Stack Overflow",
            url: "https://stackoverflow.com/users/29589367/shihab-dev",
            color: "hover:text-primary"
        }
    ];

    const inputBase = "w-full px-3 sm:px-4 py-2 sm:py-3 bg-base-100 border border-primary/20 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-secondary placeholder-secondary/50 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"

    return (
        <section id="/contact" className="flex flex-col items-center px-4 scroll-mt-30">
            <div>
                {/* Section Title */}
                <SectionHeading>Contact Me</SectionHeading>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form - Left Side */}
                    <div className="bg-gradient-to-b from-base-200/15 to-base-200/30 backdrop-blur-sm p-6 sm:p-8 rounded-md border border-primary/20 shadow-lg">
                        <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6">Send Message</h3>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-base-100 border border-primary/40 text-green-500 rounded-md">
                                <p className="text-sm sm:text-base"> Message sent successfully! I'll get back to you soon.</p>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-base-100 border border-primary/40 text-red-500 rounded-md">
                                <p className="text-sm sm:text-base">Failed to send message. Please contact me directly at shihabuddin.dev@gmail.com</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className={inputBase}
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className={inputBase}
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    className={inputBase}
                                    placeholder="What's this about?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    disabled={isSubmitting}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-base-100 border border-primary/20 rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-secondary placeholder-secondary/50 resize-none disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                                    placeholder="Tell me about your project or just say hello!"
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </div>

                    {/* Contact Information - Right Side */}
                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Let's Connect</h3>
                            <p className="text-secondary/80 text-sm md:text-base"> Would love to discuss your next project. Whether it's a collaboration, consultation, or just a friendly chat about tech, I'm here to help!
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-3 sm:space-y-4">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-bl from-base-200/15 to-base-200/40 backdrop-blur-sm backdrop-blur-sm rounded-md border border-primary/20 hover:shadow-md hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors duration-300">
                                        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                            {info.icon}
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-semibold text-secondary group-hover:text-secondary/90 transition-colors duration-300 text-sm sm:text-base">
                                            {info.title}
                                        </h4>
                                        <p className="text-secondary/80 group-hover:text-secondary/70 transition-colors duration-300 text-xs sm:text-sm truncate">
                                            {info.value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-secondary mb-4">Catch Me</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group flex items-center justify-center w-10 h-10 bg-base-200/50 backdrop-blur-sm rounded-md border border-primary/20 text-secondary/80 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                                    >
                                        <div className="group-hover:scale-110 transition-transform duration-300">
                                            {social.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;