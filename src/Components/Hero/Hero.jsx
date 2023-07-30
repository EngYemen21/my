import React, { useState } from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import Resume from '../../../public/CV.pdf'
import { fadeIn, staggerContainer } from "../../utils/motion";
import { BiHome, BiShare } from "react-icons/bi";
import linkdin from '../../../public/iconpng/linkdin.png';
import github from '../../../public/iconpng/github.png';
import Whatsapp from '../../../public/iconpng/Whatsapp.png';
import Twitter1 from '../../../public/iconpng/Twitter1.png';

export const Hero = () => {
  const [About, setAbout] = useState(false);
  const [closeAbout,setCloseAbout]=useState(false);
  const [showAbout,setShowAbout]=useState(true);
  

  const handClseAbout = () =>{
    setCloseAbout(false);
    setShowAbout(true);

  
  
  }
  const handAbout = () => {
    setAbout(true);
    setCloseAbout(true);
    setShowAbout(false);

  

  };
  function Show() {
    return (
      <>
      {closeAbout && (
      <div className={css.TopOverly}>
      <div className={css.overly}>

    
        <div className={css.card}>
          <div className={css.content}>
            <div className={css.HeaderAbout}>
                <p className={css.heading}>About Me </p>
             <button onClick={handClseAbout}  className={css.closeAbout} >X</button>
                
               
            </div>
          
            <p className={css.para}>
              I am a committed and enthusiastic IT student with a passion for
              developing my skills in information technology and software
              development. I have experience in designing and developing
              websites and electronic applications using technologies such as
              HTML, CSS, JavaScript, ReactJs, JQuery, Bootstrap, Sass, PHP,
              Laravel PHP. I am looking to work in an advanced technology
              environment with new technology challenges.
            </p>
            <button className={css.btn}><a href={Resume} download={{ Resume }}>Download  CV</a> </button>
          </div>
        </div>
        </div>
        </div>
      )
  }
      </>
    );
  }
  return (
    <div className={` paddings ${css.wrapper}`}>
      <div id="Home"></div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        // viewport={{once:true ,amount:0.25  }}
        className={` innerWidth ${css.contaier}`}
      >
        <div className={css.upperElement}>
          <motion.span
          
            variants={fadeIn("right", "tween", 0.2, 1)}
          
            className={css.name}
          >
            Hey There, <br />
            I'm <span>Mohammed</span>
          </motion.span>
        </div>

<div className={css.containerShare}>
<p>Follow Me</p>

<motion.div
  variants={fadeIn("right", "tween", 0.2, 1)}
className={css.buttons}>
  <button className={css.mainButton}>
    <BiShare size={30}/>

  </button>
  <button className={`${css.githubButton}  ${css.button}`}
   style={{ style:"transition-delay: 0s, 0s, 0s, transition-property: translate, background, box-shadow" }}>
            <img src={github} style={{ height:"30px" ,width:"30px" }} alt="" />
   </button>


   
   <button className={`${css.TwitterButton}  ${css.button}`}
   style={{ style:"transition-delay: 0.2s, 1s, 0.2s, transition-property: translate, background, box-shadow"}}>
            <img src={Twitter1} style={{ height:"30px" ,width:"30px" }} alt="" />

   
   </button>
  
   <button className={`${css.WhatsappButton}  ${css.button}`}
   style={{ style:"transition-delay: 0.2s, 1s, 0.2s, transition-property: translate, background, box-shadow;"}}>
            <img src={Whatsapp} style={{ height:"30px" ,width:"30px" }} alt="" />

   
   </button>

   
   <button className={`${css.linkdinButton}  ${css.button}`}
   style={{ style:"transition-delay: 0.2s, 1s, 0.2s,transition-property: translate, background, box-shadow"}}>

<a href="#"><img src={linkdin} style={{ height:"30px" ,width:"30px" }} alt="" /></a>
   
   </button>
</motion.div>

</div>
      

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={css.person}
        >
          <motion.img
            variants={fadeIn("right", "tween", 0.2, 1)}
            src="./my.png"
            alt=""
          />
        </motion.div>

        <div className={css.lowerElement}>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className={css.experience}
          >
            {showAbout ? (<button className={css.btn}  onClick={handAbout}>About Me</button>) : ((<button className={css.btn} style={{ opacity:0}} onClick={handAbout}>About Me</button>))}
            {About && <Show /> }
         
          </motion.div>
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className={css.certification}
          >
         
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
