import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = () => (
  <section className="min-h-[70vh] flex items-center justify-center bg-[#0f172a] py-16 px-4">
    <div className="w-full max-w-4xl bg-[#1e293b] rounded-xl shadow-md p-8 md:p-12 flex flex-col md:flex-row gap-10">
      {/* Contact Form */}
      <form className="flex-1 flex flex-col gap-5" autoComplete="off">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-2">Contact Me</h2>
          <p className="text-slate-400 mb-4">
            Have a question, project, or just want to say hi? Fill out the form below and I'll get back to you soon!
          </p>
        </div>
        <input
          type="text"
          placeholder="Your Name"
          className="bg-[#0f172a] border border-primary/40 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-[#0f172a] border border-primary/40 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition"
          required
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="bg-[#0f172a] border border-primary/40 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white font-semibold py-3 rounded-md shadow-md hover:bg-primary/90 transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info & Socials */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-6">
        <div className="flex flex-col gap-2 text-slate-300">
          <div className="flex items-center gap-3">
            <FaPhone className="text-primary text-xl" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-primary text-xl" />
            <span>your.email@example.com</span>
          </div>
        </div>
        <div className="flex gap-5 mt-4">
        
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-primary text-2xl transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact; 