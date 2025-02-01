import { delay, motion } from "framer-motion";
import { cardVariants } from "../variants";

const Card = ({className, children, index}) => {
  
  return (
    <motion.article className={`card ${className}`} variants={cardVariants} 
    >
        {children}
    </motion.article>
  )
}

export default Card