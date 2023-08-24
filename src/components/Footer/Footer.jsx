import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="contact"></a>
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:iabhinavkakran@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText" style={{ fontSize: "28px" }}>
              Contact Me
            </span>
            <a href="tel:+917669910064" style={{ fontSize: "18px" }}>
              +91 7669910064
            </a>
            <a
              href="https://www.google.com/maps/place/Gurugram,+Haryana/@28.4231603,76.8249364,11z/data=!3m1!4b1!4m6!3m5!1s0x390d19d582e38859:0x2cf5fe8e5c64b1e!8m2!3d28.4594965!4d77.0266383!16zL20vMDNmeW1n?entry=ttu"
              style={{ fontSize: "18px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Gurugram, India
            </a>
          </div>
          <div className={css.socialIcons}>
            <a
              href="https://www.linkedin.com/in/iabhinavkakran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="Linkedin.png"
                alt="LinkedIn"
                style={{ width: "40px", height: "38px" }}
              />
            </a>
            <a
              href="https://github.com/iabhinavkakran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="Github.png"
                alt="GitHub"
                style={{ width: "35px", height: "33px" }}
              />
            </a>
            <a
              href="https://twitter.com/iabhinav_kakran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="X.png"
                alt="Twitter"
                style={{ width: "40px", height: "33px" }}
              />
            </a>
            <a
              href="https://www.instagram.com/iabhinavkakran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="Instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
