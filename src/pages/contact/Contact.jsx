import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import {  motion } from "framer-motion";

import "./contact.css";
import Card from "../../UI/Card";
import { containerVariants,  fadeUpVariant } from "../../variants";

const Contact = () => {
  return (
    <>
      <Header title="Contact" highlightTitle="Us" image={HeaderImage}></Header>
      <section className="contact">
        <div className="container contact_container">
          <motion.div className="contact_wrapper" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{delay: 0.2}}>
            <motion.a
              href="tel:+94779864783"
              target="_blank"
              rel="noreferrer noopener"
           
            >
              <Card className="contact-item">
                <div className="contact-item-icon">
                  <IoCallSharp />
                </div>
                <h3 className="contact-title">phone</h3>
                <p>+94 779864783</p>
              </Card>
            </motion.a>
            <a
              href="#"
            
              rel="noreferrer noopener"
            >
              <Card className="contact-item">
                <div className="contact-item-icon">
                  <IoLocationSharp />
                </div>
                <h3 className="contact-title">Location</h3>
                <p>
                  Elite Fitness Center <br />
                  123 Wellness Avenue
                  <br />
                  Health District, FitCity 45678
                </p>
              </Card>
            </a>
            <a
              href="mailto:senesh9637@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Card className="contact-item">
                <div className="contact-item-icon">
                  <MdEmail />
                </div>
                <h3 className="contact-title">Email</h3>
                <p>hellofitness@gmail.com</p>
              </Card>
            </a>
           
          </motion.div>
          <motion.div className="contact-form-wrap" variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{delay: 0.5}}>
          <form className="contact-form">
            <div className="contact-form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name..."
                required
              />
            </div>
            <div className="contact-form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email..."
                required
              />
            </div>
            <div className="contact-form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </motion.div>
        </div>

       
      </section>
    </>
  );
};

export default Contact;
