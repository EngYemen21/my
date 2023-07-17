import React, { useState } from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import Resume from '../../../public/CV.pdf'
import { fadeIn, staggerContainer } from "../../utils/motion";
import { BiHome, BiShare } from "react-icons/bi";

export const Hero = () => {
  const [About, setAbout] = useState(false);
  const [closeAbout,setCloseAbout]=useState(false);
  const [showAbout,setShowAbout]=useState(true);
  

  // const handCv=()=>{
  //   if (closeAbout){



  //   }


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
                 {/* {closeAbout ?<button className={`${css.none}`}></button>  : } */}
               
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
            // initial={{ x:-100,opacity:0 }}
            variants={fadeIn("right", "tween", 0.2, 1)}
            //  animate={{ x:0 , opacity:1

            //  transition ={{ duration:0.6 ,delay:0.2 ,type:"tween"  }}

            // className="primaryText"
            className={css.name}
          >
            Hey There, <br />
            I'm <span>Mohammed</span>
          </motion.span>

          {/* <motion.span
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="secondaryText"
          >
            I'm Design beautiful simple <br />
            thangs , And I Love whate i do
          </motion.span> */}
        </div>

<div className={css.containerShare}>
<p>Follow us</p>

<motion.div
  variants={fadeIn("right", "tween", 0.2, 1)}
className={css.buttons}>
  <button className={css.mainButton}>
    <BiShare size={30}/>

  </button>
  <button className={`${css.githubButton}  ${css.button}`}
   style={{ style:"transition-delay: 0s, 0s, 0s; transition-property: translate, background, box-shadow;" }}>
            <img src="/iconpng/github.png" style={{ height:"30px" ,width:"30px" }} alt="" />
   </button>


   
   <button className={`${css.TwitterButton}  ${css.button}`}
   style={{ style:"transition-delay: 0.2s, 1s, 0.2s; transition-property: translate, background, box-shadow;"}}>
            <img src="/iconpng/Twitter1.png" style={{ height:"30px" ,width:"30px" }} alt="" />

   
   </button>
   {/* <button className={`${css.facebookButton}  ${css.button}`}
   style={{ style:"transition-delay: 0.2s, 1s, 0.2s; transition-property: translate, background, box-shadow;"}}>
            <img src="/iconpng/facebook.png" style={{ height:"30px" ,width:"30px" }} alt="" />

   
   </button> */}
   <button className={`${css.WhatsappButton}  ${css.button}`}
   style={{ style:"transition-delay: 0.2s, 1s, 0.2s; transition-property: translate, background, box-shadow;"}}>
            <img src="/iconpng/Whatsapp.png" style={{ height:"30px" ,width:"30px" }} alt="" />

   
   </button>

   
   <button className={`${css.linkdinButton}  ${css.button}`}
   style={{ style:"transition-delay: 0.2s, 1s, 0.2s; transition-property: translate, background, box-shadow;"}}>

<a href="#"><img src="/iconpng/linkdin.png" style={{ height:"30px" ,width:"30px" }} alt="" /></a>
   
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
            {About ? <Show /> : console.log("error")}
            {/* <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>years</div>
              <div>experience</div>
            </div> */}
          </motion.div>
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className={css.certification}
          >
            {/* <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>UI/UX DESIGNER</span> */}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
