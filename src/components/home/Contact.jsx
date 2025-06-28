import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import SectionHeading from "../shared/SectionHeading";
import AnimatedSocialIcon from "../shared/AnimatedSocialIcon";
import Button from "../ui/Button";
import Lottie from "lottie-react";
import contact from '../../assets/lottis/contact.json'

const Contact = () => (
    <section id="/contact">
        <SectionHeading>Contact Me</SectionHeading>

        <div className="w-full max-w-5xl mx-auto bg-gradient-to-t from-base-200/30 to-base-200/50 rounded-md shadow p-8 md:p-12 flex flex-col md:flex-row justify-between gap-10 mt-8 md:mt-12">
            {/* Contact Form */}
            <form className="flex-1 flex flex-col gap-5" autoComplete="off">
                <p className="max-w-sm mx-auto">
                    Have a question, project, or just want to say hi? Fill out the form below and I'll get back to you soon!
                </p>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-base-100 text-base-content border border-primary/40 rounded-md px-4 py-3 focus:outline-none focus:border-primary transition"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-base-100 text-base-content border border-primary/40 rounded-md px-4 py-3 focus:outline-none focus:border-primary transition"
                    required
                />
                <textarea
                    placeholder="Your Message"
                    rows={3}
                    className="bg-base-100 text-base-content border border-primary/40 rounded-md px-4 py-3 focus:outline-none focus:border-primary transition"
                    required
                />
                <Button
                    type="submit"
                >
                    Send Message
                </Button>
            </form>

            {/* Contact Info & Socials */}
            <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-6">
              <div >
                <Lottie animationData={contact} className="w-full h-[150px] md:h-[250px]" />
            </div>
                <div className="flex flex-col gap-2 text-base-content/90">
                    <div className="flex items-center gap-3">
                        <FaPhone className="text-primary text-xl" />
                        <FaWhatsapp className="text-primary text-xl" />
                        <span>+8801740-520249</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-primary text-xl" />
                        <span>shihabuddin.dev@gmail.com</span>
                    </div>
                </div>
                <div><AnimatedSocialIcon /></div>

            </div>
        </div>
    </section>
);

export default Contact;