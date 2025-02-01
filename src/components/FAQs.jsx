import SectionHead from "./SectionHead";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../data";
import FAQ from "./FAQ";
import { delay, motion } from "framer-motion";
import { containerVariants } from "../variants";

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs_container">
        <SectionHead
          icon={<FaQuestion />}
          title="Helpful"
          highlightTitle="FAQs"
        />
        <motion.div
          className="faqs_wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map(({ id, question, answer }) => {
            return <FAQ key={id} question={question} answer={answer} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;
