import Header from "../../components/Header";
import HeaderImage from "../../images/trainers-page-header.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Trainer from "../../components/Trainer";
import { delay, motion } from "framer-motion";
import { containerVariants } from "../../variants";

import "./trainers.css";

const Trainers = () => {
  return (
    <>
      <Header
        title="Certified "
        highlightTitle="Trainers"
        image={HeaderImage}
      ></Header>

      <section className="trainers">
        <motion.div
          className="container trainers_container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedinIn />, link: socials[3] },
                ]}
              />
            );
          })}
        </motion.div>
      </section>
    </>
  );
};

export default Trainers;
