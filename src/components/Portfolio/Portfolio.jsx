import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
          <motion.a href="https://e-commerce-app-q0tc.onrender.com/" width={300} height={300} target="_blank" variants={fadeIn("up", "tween", .5, .6)}> <motion.img  src="./clothing.png" alt="project" height={300} width={300}/></motion.a>

          <motion.a href="https://punarjagran-ngo.onrender.com/" width={300} height={300} target="_blank" variants={fadeIn("up", "tween", .5, .6)}><motion.img  src="./Ngo.png" alt="project" height={300} width={300}/>  </motion.a>
            
            <motion.a href="" width={300} height={300} target="_blank" variants={fadeIn("up", "tween", .5, .6)}><motion.img  src="./social.png" alt="project" height={300} width={300}/></motion.a>
            
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;