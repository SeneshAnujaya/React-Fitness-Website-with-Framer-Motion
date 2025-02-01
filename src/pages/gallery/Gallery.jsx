import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import {  delay, motion } from "framer-motion";


import './gallery.css';
import { containerVariants, fadeUpVariant } from '../../variants';

const Gallery = () => {

  const galleryLength = 15;
  const images = [];

  for(let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
    <Header title="Our" highlightTitle="Gallery" image={HeaderImage}>
    </Header>
    <section className="gallery">
      <div className="container gallery_container">
        {
          images.map((image, index) => {
            return <motion.article key={index} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.img src={image} alt={`Gallery pics ${index + 1}`} variants={fadeUpVariant} transition={{ duration: 0.6, ease: "easeIn", delay: 0.5 }}/>
            </motion.article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery