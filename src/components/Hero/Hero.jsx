import React from "react";
import css from "../Hero/Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        {/* upper elements */}
        <div className={` ${css.upperElements}`}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey There, <br /> I'm Abhinav.
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="secondaryText"
          >
            I develop beautiful simple <br />
            things ,And I love what i do
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            src="./profile.png"
            alt=""
            variants={slideIn("up", "tween", 0.5, 1.3)}
          />
        </motion.div>

        {/* email */}
        <a href="mailto:iabhinavkakran@gmail.com" className={css.email}>
          iabhinavkakran@gmail.com
        </a>

        {/* lower elements */}
        <div className={` ${css.lowerElements}`}>
          <div className={css.experience}>
            <div className="primaryText">2.6</div>
            <div className="secondarytext">
              <div>Year</div>
              <div>Experience</div>
            </div>
          </div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>UI/UX DESIGNER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
