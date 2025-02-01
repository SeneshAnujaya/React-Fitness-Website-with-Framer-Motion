import Image from '../images/values-side-pic.jpg';
import SectionHead from './SectionHead';
import {GiCutDiamond} from 'react-icons/gi';
import { values } from '../data';
import Card from '../UI/Card';
import { containerVariants, fadeScaleVariant, fadeUpVariant } from '../variants';
import { delay, motion } from "framer-motion";

const Values = () => {
  return (
    <section className="values">
        <div className="container values_container">
            <div className="values_left">
                <div className="values_image">
                    <motion.img variants={fadeScaleVariant} initial="hidden" whileInView="visible" transition={{duration: 1.1,ease: 'easeInOut', delay: 0.6}} src={Image} alt="Values-image" viewport={{ once: true }}/>
                </div>
            </div>
            <div className="values_right">
                <SectionHead icon={<GiCutDiamond/>}title="Our" highlightTitle="Values"/>
                <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" transition={{duration: 1, delay: 0.5}} viewport={{once: true}}>We believe in honesty, dedication, and helping you achieve your fitness goals through consistent support and encouragement.</motion.p>
                <motion.div className="values_wrapper" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                    {
                       values.map(({id, icon, title, desc}) => {
                        return <Card className="values_value" key={id}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{desc}</small>
                        </Card>
                       }) 
                    }
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Values;