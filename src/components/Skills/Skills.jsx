import React from "react";
import css from "./Skills.module.scss";
const Skills = () => {
  return (
    <section className={css.wrapper}>
      <a className="anchor" id="skills"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <span className="primaryText yPaddings">My SKILLS</span>
      </div>
      <div className={css.skillsContainer}>
        <img src="Javascript.png" alt="JavaScript" className={css.skillLogo} />
        <img src="Nodejs.png" alt="Node.js" className={css.skillLogo} />
        <img src="Reactjs.png" alt="React.js" className={css.skillLogo} />
        <img src="Expressjs.png" alt="Express.js" className={css.skillLogo} />
        <img src="Mongodb.png" alt="MongoDB" className={css.skillLogo} />
        <img src="MySQL.png" alt="MySQL" className={css.skillLogo} />
        <img src="EJS.png" alt="EJS" className={css.skillLogo} />
      </div>
      <div className={css.skillsContainer}>
        <img src="HTML.png" alt="HTML" className={css.skillLogo} />
        <img src="CSS.png" alt="CSS" className={css.skillLogo} />
        <img src="Java.png" alt="Java" className={css.skillLogo} />
        <img src="C.png" alt="C-Language" className={css.skillLogo} />
        <img src="AWS.png" alt="AWS" className={css.skillLogo} />
        <img src="Postman.png" alt="Postman" className={css.skillLogo} />
        <img src="GIT.png" alt="Git" className={css.skillLogo} />
      </div>
    </section>
  );
};

export default Skills;
