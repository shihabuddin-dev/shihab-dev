import { motion } from 'framer-motion';
const SectionHeading = ({ children }) => (
  <motion.div initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex items-center justify-center gap-2 max-w-2xs mx-auto">
    <div className="flex-1 h-px bg-base-content/30" />
    <div className="bg-base-content/10 px-4 py-1.5 rounded-md text-base-content font-semibold tracking-widest text-base select-none">
      {children}
    </div>
    <div className="flex-1 h-px bg-base-content/30" />
  </motion.div>
);

export default SectionHeading;
