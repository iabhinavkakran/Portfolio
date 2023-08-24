import React from "react";
import css from "./Profile.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
const Profile = () => {
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
            Dedicated to the art of Web Development
            <br />
            using the dynamic MERN stack, <br />
            fashioning beautifully simple creations <br />
            that resonate with my genuine passion <br />
            for what I do.
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
            <div className="primaryText">2.6+</div>
            <div className="secondarytext">
              <div>Year</div>
              <div>Experience</div>
            </div>
          </div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <a
              href="./Abhinav's-Resume.pdf"
              download
              className={css.downloadButton}
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;
