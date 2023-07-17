import React from "react";
import css from "./Experties.module.scss";
import { motion } from "framer-motion";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
export const Experties = () => {
  const items = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
  ];
  const updatedClasses = [
    "item--2",
    "item--3",
    "item--4",
    "item--4",
    "item--6",
    "item--7",
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className={css.wrapper}
    >
       {/* <span className="primaryText ypaddings">My Skills</span> */}
      <a id="experties" className="anchor"></a>
      <div
        className={`flexCenter innerWidth ${css.container}`}
      >
        <div  className={` ypaddings innerWidth ${css.headling}`}>
          <div>
            <span className={`primaryText ypaddings`}>What I do for my Clients</span>
            {/* <p style={{ marginTop: "10px" }} className="secondaryText">
              Perfact solution for digital experience
            </p> */}
          </div>
        </div>
        {/* <h2>What I do for my Clients</h2> */}
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={css.exp1}
                key={i}
              >
                <div className={css.card}>
                  {/* <div className={`${css["item"]} ${css["item--2"]}`} >  */}
                  <div className={`${css["item"]} ${css[updatedClasses[i]]}`}>
                    <exp.icon
                      size={25}
                      color="white"
                      style={{
                        background: exp.bg,
                        width: "40px",
                        height: " 40px",
                        marginBottom: " 7px",
                      }}
                    />
                    <span className="secondaryText"> {exp.name} </span>
                    <span className="secondaryText">
                      {/* {exp.projects} Projects */}
                    </span>
                  </div>
                </div>

                {/* <span>{exp.name} </span>
                  <span className="secondaryText">{exp.projects} Projects</span> */}
              </motion.div>
            );
          })}
        </div>
        {/* <motion.div variants={textVariant(0.5)} className={css.rightSide}>
          <span className="primaryText">What do I help</span>

          {WhatDoIHelp.map((inf, i) => {
            return (
              <span className="secondaryText" key={i}>
                {inf}
              </span>
            );
          })}
          <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">285+</span>
              <span className="secondaryText">Project Completed</span>
            </div>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">194+</span>
              <span className="secondaryText">Happy Clients</span>
            </div>
          </div>
        </motion.div> */}
      </div>
    </motion.section>
  );
};
