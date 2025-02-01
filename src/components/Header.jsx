import { delay, motion } from "framer-motion";
import { fadeUpVariant } from "../variants";

const Header = ({title, highlightTitle, image, children}) => {
    return (
        <header className="header">
            <div className="header_container">
                <div className="header_container-bg">
                    <img src={image} alt="Header Background" />
                </div>
                <div className="header_content">
                    <motion.h2 variants={fadeUpVariant} initial="hidden" animate="visible" transition={{duration: 1, ease: 'easeIn'}}>{title}<span className="highlight"> {highlightTitle}</span></motion.h2>
                    <p>{children}</p>
                </div>
            </div>
        </header>
    )
}

export default Header