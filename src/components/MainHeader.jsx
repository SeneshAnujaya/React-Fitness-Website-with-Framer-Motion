import { Link } from "react-router-dom";
import Image from "../images/hero-image.png";
import { IoFitness } from "react-icons/io5";
import { MdDoubleArrow } from "react-icons/md";
import { delay, easeIn, motion } from "framer-motion";
import { fadeDownVariant, fadeLeftVariant, fadeScaleVariant, fadeUpVariant, fadeZeroScaleVariant } from "../variants";

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
          <div className="subtitle-wrap">
            <motion.span variants={fadeZeroScaleVariant} initial="hidden" animate="visible" transition={{duration: 1, ease: 'easeIn'}} >
              {" "}
              <IoFitness />
            </motion.span>

            <motion.h4 variants={fadeDownVariant} initial="hidden" animate="visible"  transition={{duration: 1}}>Step Into Fitness</motion.h4>
          </div>

          <motion.h1 variants={fadeUpVariant} initial="hidden" animate="visible" transition={{duration: 1}}>
            Start Your <span className="highlight">Fitness</span> Story Today
          </motion.h1>
          <motion.p variants={fadeUpVariant} initial="hidden" animate="visible" transition={{duration: 1, delay: 0.3}}>
            Join a community dedicated to fitness and wellness. Whether you're a
            beginner or a pro, we have the tools and support to help you succeed
          </motion.p>
          <Link to="/plans">
          <motion.div className="btn lg" variants={fadeUpVariant} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 0.5}} >
            <span className="btn-icon">
              <MdDoubleArrow />
            </span>
            Get Started
            </motion.div>
          </Link>
        </div>
        <div className="main_header-right">
          <motion.div variants={fadeScaleVariant} initial="hidden" animate="visible" transition={{duration: 1.1,ease: 'easeInOut', delay: 0.1}} className="main_header-circle">
            <div className="main_header-image">
              <motion.img src={Image} alt="Main-Header-Image" variants={fadeLeftVariant} initial="hidden" animate="visible" transition={{duration: 1.1,ease: 'easeInOut'}}/>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
