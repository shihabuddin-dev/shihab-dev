import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import SectionHeading from "../shared/SectionHeading";
import AnimatedSocialIcon from "../shared/AnimatedSocialIcon";
import Button from "../ui/Button";
import Lottie from "lottie-react";
import contact from '../../assets/lottis/contact.json'
const inputBase = 'bg-base-100 text-base-content border border-primary/40 rounded-md px-4 py-3 focus:outline-none focus:border-primary transition'
const contactInfo = [
    {
        icon: <FaEnvelope className="text-lg" />,
        title: "Email",
        value: "shihabuddin.dev@gmail.com",
        link: "mailto:shihabuddin.dev@gmail.com"
    },
    {
        icon: <FaPhone className="text-lg" />,
        title: "Phone / Whatsapp",
        value: "+8801740520249",
        link: "tel:+8801740520249"
    },
    {
        icon: <FaMapMarkerAlt className="text-lg" />,
        title: "Location",
        value: "Bogura, Bangladesh"
    },

];

const Contact = () => (
    <section id="/contact">
        <SectionHeading>Contact Me</SectionHeading>

        <div className="w-full max-w-5xl mx-auto bg-gradient-to-t from-base-200/30 to-base-200/50 rounded-md shadow p-8 md:p-12 flex flex-col md:flex-row justify-between gap-10">
            {/* Contact Form */}
            <form className="flex-1 flex flex-col gap-5" autoComplete="off">
                <p className="max-w-sm mx-auto">
                    Have a question, project, or just want to say hi? Fill out the form below and I'll get back to you soon!
                </p>
                <input
                    type="text"
                    placeholder="Your Name"
                    className={inputBase}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className={inputBase}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    rows={4}
                    className={inputBase}
                    required
                />
                <Button
                    type="submit"
                >
                    Send Message
                </Button>
            </form>

            {/* Contact Info & Socials */}
            <div className="flex-1 flex flex-col items-center justify-between gap-6">
                <div className="w-full mx-auto">
                    <Lottie animationData={contact} className="w-full h-[150px] md:h-[200px]" />
                </div>
                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-2 gap-3">
                    {contactInfo.map((info, index) => (
                        <a
                            key={index}
                            href={info.link}
                            className="group flex items-center gap-3 p-4 bg-base-200/30 backdrop-blur-sm rounded-md border border-primary/20 hover:shadow-lg hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1"
                        >   <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                {info.icon}
                            </div>
                            <div>
                                <h4 className="text-sm group-hover:text-secondary/90 transition-colors duration-300">
                                    {info.title}
                                </h4>
                                <p className="text-xs text-secondary/80 group-hover:text-secondary/70 transition-colors duration-300">
                                    {info.value}
                                </p>
                            </div>
                        </a>
                    ))}
                    <div className="mt-6">  <AnimatedSocialIcon /></div>
                </div>

            </div>
        </div>
    </section>
);

export default Contact;