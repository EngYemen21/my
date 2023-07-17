import React, { useState } from 'react'

import css from './Header.module.scss'
import {BiMenuAltLeft, BiMenuAltRight, BiPhoneCall} from 'react-icons/bi'
import {motion } from 'framer-motion'
import { getMenuStyles } from '../../utils/motion'
import { headerVariants } from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'

export const Header = () => {
    const [menuOpened,setmenuOpened]=useState(false);

    const HeaderShadow=useHeaderShadow();
  
   
  return (
   <motion.div 
   initial="hidden"
   whileInView="show"
  
   variants={headerVariants}
   style={{ boxShadow:HeaderShadow }}
   
   
   className={`paddings  ${css.wrapper}`}>

    <div className={`flexCenter innerWidth ${css.container}`}>

        <div className={css.name}>
            Mohammed
        </div>
        <ul style={getMenuStyles(menuOpened)}  className={`flexCenter  ${css.menu}`}>
        <li><a href="#Home">Home</a></li>
            <li><a href="#experties">Services</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#portfolio">Portfilio</a></li>
            {/* <li><a href="people">Testimmonial</a></li> */}
            <button className={`flexCenter ${css.phone}`}><a style={{color:"white", textDecoration:"none"  }} href="#Contect">
            Contect me</a>
            <BiPhoneCall />
             </button>
        </ul>
        <div className={css.menuOpened} onClick={() => setmenuOpened((prev)=>!prev)}>
         <BiMenuAltRight  size={30}/>

        </div>
    </div>




   </motion.div>
  )
}
