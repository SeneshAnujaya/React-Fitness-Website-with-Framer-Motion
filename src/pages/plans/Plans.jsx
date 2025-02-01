import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";
import "./plans.css";
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { delay, motion } from "framer-motion";
import { containerVariants } from "../../variants";

const Plans = () => {
  return (
    <>
      <Header
        title="Membership "
        highlightTitle="Plans"
        image={HeaderImage}
      ></Header>
      <section className="plans">
        <motion.div
          className="container plans_container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {plans.map(({ id, name, desc, price, features, className }) => {
            return (
              <Card key={id} className="plan">
                <h3 className={`plan-title ${className ? className : ""}`}>
                  {name}
                </h3>
                <small>{desc}</small>
                <h1
                  className={`${className ? className : ""}`}
                >{`$${price}`}</h1>
                <h2>/mo</h2>
                <h4 className="plan-features">Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <div key={index} className="feature-list">
                      <div className="feature-icon">
                        {available ? <FaCheck /> : <IoCloseSharp />}
                      </div>
                      <p className={!available ? "disabled" : ""}>{feature}</p>
                    </div>
                  );
                })}
                <button className="btn">Choose Plan</button>
              </Card>
            );
          })}
        </motion.div>
      </section>
    </>
  );
};

export default Plans;
