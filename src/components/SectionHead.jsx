import { delay, motion } from "framer-motion";
import { fadeUpVariant, fadeZeroScaleVariant } from "../variants";

const SectionHead = ({ icon, title, highlightTitle, className }) => {
  return (
    <div className={`section_head ${className}`}>
      <motion.div variants={fadeZeroScaleVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{duration: 0.9, ease: 'easeInOut', delay: 0.2}}>{icon}</motion.div>
   
      <motion.h2 variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{duration: 1, delay:0.1}}>{title}<span className="highlight"> {highlightTitle} </span></motion.h2>
    </div>
  );
};

export default SectionHead;
