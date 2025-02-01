import { useState } from "react";
import SectionHead from "./SectionHead";
import {ImQuotesLeft} from 'react-icons/im';
import Card from "../UI/Card";
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle , } from 'react-icons/io';
import { testimonials } from "../data";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { delay, motion } from "framer-motion";
import { containerVariants, fadeScaleVariant } from "../variants";


const Testimonials = () => {

  const [index, setIndex] = useState(0);
  const {name, quote, job, avatar} = testimonials[index];

  const prevTestimonialHandler = () => {
    setIndex(prev => prev - 1);

    if (index <= 0 ) {
      setIndex(testimonials.length - 1);
    }
  }

  const nextTestimonialHandler = () => {
    setIndex(prev => prev + 1);

    if(index >= testimonials.length - 1) {
      setIndex(0);
    }
  }


  return (
    <section className="testimonials">
      <div className="container testimonials_container">
        <SectionHead icon={<ImQuotesLeft/>}   title="Happy" highlightTitle="Clients" className="testimonials_head"/>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Card className="testimonial">
          <div className="testimonial_avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial_quote">
            {`"${quote}"`}
          </p>
          <h5 className="testimonial_up-title">{name}</h5>
          <small className="testimonial_title">{job}</small>
        </Card>
        </motion.div>

        <div className="testimonial_btn-container">
          <motion.button className="testimonials_btn" onClick={prevTestimonialHandler} variants={fadeScaleVariant} initial="hidden" whileInView="visible" transition={{duration: 0.5,ease: 'easeIn', delay: 0.1}}><IoIosArrowRoundBack /></motion.button>
          <motion.button className="testimonials_btn" onClick={nextTestimonialHandler} variants={fadeScaleVariant} initial="hidden" whileInView="visible" transition={{duration: 0.5,ease: 'easeIn', delay: 0.1}}><IoIosArrowRoundForward /></motion.button>
        </div>

      </div>
    </section>
  )
}

export default Testimonials;