import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { fadeUpVariant } from "../variants";
import { delay, motion } from "framer-motion";

const FAQ = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <motion.article
      className="faq"
      onClick={() => setIsAnswerShowing((prev) => !prev)}
      variants={fadeUpVariant}
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <div>
        <h4 className="faq-title">{question}</h4>
        <button className="faq_icon">
          {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </motion.article>
  );
};

export default FAQ;
