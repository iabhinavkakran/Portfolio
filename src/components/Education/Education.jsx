import React from "react";
import { education } from "../../utils/data";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerChildren,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
import css from "./Education.module.scss";

const Education = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <section className={css.wrapper}>
        <a className="anchor" id="education"></a>
        <div className={`innerWidth flexCenter ${css.container}`}>
          <span className="primaryText yPaddings">Education</span>
        </div>
        <div className={`innerWidth flexCenter ${css.container}`}>
          <div className={`flexCenter ${css.experiences}`}>
            {education.map((exp, i) => {
              return (
                <motion.div
                  variants={textVariant2}
                  key={i}
                  className={`flexCenter ${css.exp}`}
                >
                  <div className={css.post}>
                    <h1>{exp.course}</h1>
                    <p>{exp.tenure}</p>
                    <p>{exp.location}</p>
                  </div>
                  <div className={css.role}>
                    <h1>{exp.place}</h1>
                    <p>{exp.detail}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
              <motion.div
                variants={fadeIn("down", "tween", 2, 1.5)}
                className={css.line}
              ></motion.div>
              <div>
                <div
                  className={css.circle}
                  style={{ background: "#286F6C" }}
                ></div>
              </div>
              <div>
                <div
                  className={css.circle}
                  style={{ background: "#F2704E" }}
                ></div>
              </div>
              <div>
                <div
                  className={css.circle}
                  style={{ background: "#EEC048" }}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Education;
