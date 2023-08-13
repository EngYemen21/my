import React from 'react'
import css from './Portfilo.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren } from '../../utils/motion'
import { BiStreetView } from 'react-icons/bi'
// import Delivery from '../../../public/images/Delivery.jpg';
// import gym from '../../../public/images/gym.jpg'; 
// import AcademiLearning from '../../../public/images/website AcademiLearning.jpg'; 
// import timerTime from '../../../public/images/timerTime.jpg'; 
// import NonaProduct from '../../../public/images/NanoCamp.jpg';
// import Watch from '../../../public/images/Smart Watch.jpg'; 
export const Portfilo = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
   
    className={`paddings ${ css.warpper }`}>
            <a id="portfolio" className="anchor"></a>

    
        <div className={`flexCenter innerWidth ${ css.container }`}>
           <div className={`flexCenter ${css.headling}`}>

            <div>
          
                <motion.span className="primaryText" variants={fadeIn("left","tween",0.5,0.6)} >My Latest Works</motion.span>
                {/* <p style={{ marginTop:"10px" }} className="secondaryText">Perfact solution for digital experience</p> */}
            </div>
            {/* <span className="secondaryText">
                Explore More Works
            </span> */}
           </div>
           <div className={`flexCenter ${ css.showCase}`}>


           <motion.div className={ css.card}  variants={fadeIn("down","tween",0.5,0.6)} >
    <div  className={ css.cardimage} >
      <img  src="./images/Delivery.jpg"  alt="Project" /> 
    </div>
    <div className={ css.category}> <a  href="">Github</a>  </div>
    <div className={ css.heading} > project Delivery HTML+CSS+js+JQuery+Php
        
    </div>
</motion.div>
<div className={ css.card}>
    <div  className={ css.cardimage} >
      <img  src="./images/gym.jpg"  alt="Project"  style={{ height:"270px" }}/>
    </div>
    <div className={ css.category}> <a  href="">Github</a>  </div>
    <div className={ css.heading} > project Delivery <br/> using : HTML+CSS+js+JQuery+Php
        
    </div>
</div>

<motion.div className={ css.card}  variants={fadeIn("right","tween",0.5,0.6)} >
    <div  className={ css.cardimage} >
      <img  src="./images/website AcademiLearning.jpg" alt="Project"  style={{ height:"270px" }} />
    </div>
    <div className={ css.category}> <a  href="">Github</a>  </div>
    <div className={ css.heading} > Education Online <br/> using :HTML+CSS
        
    </div>
</motion.div>

<motion.div className={ css.card}  variants={fadeIn("up","tween",0.5,0.6)} >
    <div  className={ css.cardimage} >
      <img src="./images/Smart Watch.jpg" alt="Project"  style={{ height:"270px" }}  />
    </div>
    <div className={ css.category}> <a  href="">Github</a>  </div>
    <div className={ css.heading} > Store Smart Watch<br/> using : HTML+CSS
        
    </div>
</motion.div>



<div className={ css.card}>
    <div  className={ css.cardimage} >
      <img src="./images/timerTime.jpg" alt="Project" /> 
    </div>
    <div className={ css.category}> <a  href="">Github</a>  </div>
    <div className={ css.heading} > Timer Time <br/>  using : HTML+CSS+js+API
        
    </div>
</div>


<motion.div className={ css.card}  variants={fadeIn("up","tween",0.5,0.6)} >
    <div  className={ css.cardimage} >
      <img src="./images/NanoCamp.jpg" alt="Project"   style={{ height:"270px" }}  />
    </div>
    <div className={ css.category}> <a  href="">Github</a>  </div>
    <div className={ css.heading} > Store webSite <br/>  using : HTML+CSS+js
        
    </div>
</motion.div>


          
           </div>
         
        </div>




    </motion.section>
  )
}
