import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import { programs } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { containerVariants } from "../variants";
import { delay, motion } from "framer-motion";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs_container">
        <SectionHead
          icon={<FaCrown />}
          title="Explore"
          highlightTitle="Programs"
        />

        <motion.div
          className="programs_wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map(({ id, icon, title, info, path }, index) => {
            return (
              <Card className="programs_program" key={id} index={index}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn More <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
