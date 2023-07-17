import React from "react";
import css from "./Work.module.scss";
import { motion  } from "framer-motion";
import { fadeIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
import { workExp } from "../../utils/data";

export const Work = () => {

  return (
    <motion.section className={`paddings  ${css.wrapper}`}
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
     
      
    >
      <a id="work" className="anchor"></a>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <span className="primaryText ypaddings">My Work Experience</span>
        <div className={`flexCenter ${css.experience}`}>
          {workExp.map((exp, i) => {
            return (
                // flexCenter
              <motion.div
              variants={textVariant2}
              
              className={`flexCenter ${css.exp}`} key={i}>
                <div className={css.post}>
                  <h2>{exp.place}</h2>
                  <p>{exp.tenure}</p>
                </div>
                <div className={css.role}>
                <h2>{exp.role}</h2>
                  <p>{exp.detail}</p>

                </div>
              </motion.div>
            );
          })}
           <motion.div
           variants={zoomIn(1,1)}
           className={css.progressbar}>
            <motion.div 
            variants={fadeIn("down","tween",2,1.5)}
            className={css.line}></motion.div>
            <div><div className={css.circle} style={{ background:"#286f6c"}}></div></div>
            <div><div className={css.circle} style={{ background:"#f2704e"}}></div></div>
            <div><div className={css.circle} style={{ background:"#ece048"}}></div></div>

        </motion.div>
        </div>
       
      </div>
    </motion.section>
  );
}
