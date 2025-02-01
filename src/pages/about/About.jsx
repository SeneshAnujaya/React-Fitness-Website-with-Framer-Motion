import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/values.jpg'
import VisionImage from '../../images/header_bg_3.jpg'
import MissionImage from '../../images/header_bg_5.jpg'
import './about.css';
import { FaCrown, FaFeatherAlt, FaLightbulb, FaRocket } from 'react-icons/fa';
import SectionHead from '../../components/SectionHead';
import { delay, motion } from "framer-motion";
import { fadeScaleSidePics, fadeScaleVariant, fadeUpVariant } from '../../variants';

 const About = () => {
  return (
    <>
    <Header title="About" image={HeaderImage} highlightTitle="Us">
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum libero illum aperiam sunt eligendi, quo, omnis iure rerum doloribus magni accusantium, itaque quaerat odit atque? Architecto aspernatur blanditiis porro dolores! */}
    </Header>

    <section className='about_story'>
      <div className="container about_story-container">
        <div className="about_section-image">
          <motion.img src={StoryImage} alt="Our Story" variants={fadeScaleSidePics} initial="hidden" whileInView="visible" transition={{duration: 0.7,ease: 'easeIn', delay: 0.1}} viewport={{ once: true }} />
        </div>
        <div className="about_section-content">
      
          <SectionHead icon={<FaFeatherAlt />}  title="The Journey" highlightTitle="Behind Us" className="about-section-head"/>
          <motion.p className='about-section-first-text' variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{duration: 1, delay:0.3}}>"Our journey began with a vision to inspire healthier, stronger lives." We started as a small fitness center with the simple goal of helping people unlock their potential through exercise and wellness. From the very beginning, we’ve believed that fitness is more than just workouts; it’s about building confidence, fostering discipline, and creating a supportive community. With a passion for health and well-being, we set out to create a space where everyone could feel welcome and motivated to reach their goals.</motion.p>
          <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{duration: 1, delay:0.6}}>Over the years, we’ve grown into more than just a fitness center—we’ve become a family. Along the way, we’ve faced challenges, celebrated victories, and continually refined our approach to deliver the best fitness experience. From state-of-the-art equipment to personalized training programs, every aspect of our center is designed to help you succeed. Our dedicated trainers and staff are here to guide, support, and inspire you, no matter where you are on your fitness journey.</motion.p>
        </div>
      </div>
    </section>

    <section className='about_vision'>
      <div className="container about_vision-container">
        
        <div className="about_section-content">
 
          <SectionHead icon={<FaLightbulb />}  title="A Vision for " highlightTitle="Wellness" className="about-section-head"/>
          <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{duration: 1, delay:0.3}}>Our vision is to create a world where fitness and wellness are accessible to everyone." We believe in empowering individuals to lead healthier, happier lives through personalized fitness experiences and a supportive community. Our aim is to inspire positive change, not just in physical strength but also in mental well-being, helping you thrive in every aspect of life.</motion.p>
          <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{duration: 1, delay:0.6}}>We’re committed to fostering a fitness culture that prioritizes inclusion, innovation, and growth. By combining cutting-edge training techniques, state-of-the-art equipment, and expert guidance, we strive to provide an environment where every individual, regardless of age or ability, feels encouraged to pursue their goals.</motion.p>

        </div>
        <div className="about_section-image">
          <motion.img src={VisionImage} alt="Our Story" variants={fadeScaleSidePics} initial="hidden" whileInView="visible" transition={{duration: 0.7,ease: 'easeIn', delay: 0.1}} viewport={{ once: true }}/>
        </div>
      </div>
    </section>

    <section className='about_mission'>
      <div className="container about_mission-container">
        <div className="about_section-image">
          <motion.img src={MissionImage} alt="Our Story" variants={fadeScaleSidePics} initial="hidden" whileInView="visible" transition={{duration: 0.7,ease: 'easeIn', delay: 0.1}} viewport={{ once: true }}/>
        </div>
        <div className="about_section-content">
        <SectionHead icon={<FaRocket />}  title="Your Wellness, Our  " highlightTitle="Mission" className="about-section-head"/>
          <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{duration: 1, delay:0.3}}>At the core of our fitness center is a simple yet powerful mission: to inspire and empower individuals to lead healthier, more active lives. We believe that fitness is not just about physical strength but also about building confidence, fostering mental clarity, and creating a sense of accomplishment.</motion.p>
          <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{duration: 1, delay:0.6}}>Our mission drives us to provide a welcoming space where everyone, regardless of their fitness level, can feel supported in achieving their goals. Through expert guidance, innovative programs, and a sense of community, we strive to make wellness accessible to all.</motion.p>
          <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{duration: 1, delay:0.9}}>Every step you take with us is a step toward a better you. Together, we aim to create an environment that motivates, challenges, and celebrates your journey to becoming the best version of yourself.</motion.p>
        </div>
      </div>
    </section>

    </>
  )
}

export default About;
