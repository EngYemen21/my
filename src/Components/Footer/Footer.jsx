import React, { useState , useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import css from "./Footer.module.scss";

import { footerVariants, staggerChildren } from "../../utils/motion";
import { BiLocationPlus, BiMessageDetail, BiPhoneCall } from "react-icons/bi";


export const Footer = () => {
  const [name ,setName]=useState();
const [email ,setEmail]=useState();
const [comment ,setComment]=useState();
const [errorName,setErrorName]=useState(false);
const [errorEmail,setErrorEmail]=useState(false);
const [errorComment,setErrorComment]=useState(false);
const [sucss,setSucss]=useState(false);
const form = useRef();
const IsValid=()=>{
  if (!name || name.trim() ==='')
  {
    setErrorName("must be the name not empty");
  return false;
  }
 else if (!email || email.trim() ==='')
  {
    setErrorEmail("must be the email not empty");
  return false;
  }
 else if (!comment || comment.trim() ==='')
  {
    setErrorComment("must be the comment not empty");
  return false;
  }
 else if (!isValidEmail())
  {
    setErrorEmail("must be the Email Correct");
  return false;
  }
  return true;

}
const  isValidEmail =()=>{
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
const handleSubmite=(e)=>{
  e.preventDefault();
  if (IsValid())
  {
    emailjs.sendForm("service_w0fd6jl"
      ,  "template_uf6wjfo"

      , form.current,  "fyS0qj7bj8OYIrKnz" )
    .then((result) => {
        console.log(result.text);
        console.log("Done");
    }, (error) => {
        console.log(error.text);
    });
     
  }

}
  
  return (

    <section className={` ${css.warpper}`}>
      <div className={` flexCenter ypaddings innerWidth ${css.container}`}>
        <div className={`paddings ${css.boxFooter}`}>
          <div id="Contect"></div>
          <h2 className="primaryText">Contect</h2>
          <div className={css.Footer}>
            <div className={css.leftSide}>
                <h3 className="secondaryText">Send me a Message</h3>
                <p className="aboutEmail"  >you can contact us via email to inquire about or request a specific service from us ...!<br/>
                We are waiting for you .
                  </p>
                
                
                <div className={css.box}>
                <BiPhoneCall size={30}/>
            {/* <img src="circleHtml.png" alt="Phone" /> */}
            <p ><a href='mailto:m.bander.it@gmail.com'>(00967) 779 475 324</a></p>
                </div>

                <div className={css.box}>
                  <BiMessageDetail size={30}/>
            {/* <img src="circleHtml.png" alt="Email" /> */}
            <p ><a href='mailto:m.bander.it@gmail.com'>m.bander.it@gmail.com</a></p>
                </div>
                <div className={css.box}>
             <BiLocationPlus size={30}/>
             
            {/* <img src="circleHtml.png" alt="Location" /> */}
            <p >Jamal Streat , Taiz - Yemen</p>
                </div>

            </div>
            <motion.div  variants={footerVariants}  className={css.rightSide}>
                
            <div style={{background:"#281d77"  }}  className={css.card} >
  <span className={css.title}>Leave a Comment</span>
  <form ref={form} className={css.form}  onClick={handleSubmite}>
<div className={css.group}>
    <input name="user_name"    type="text" required="" value={name} onChange={(e)=>{setName(e.target.value)}} />
    <label htmlFor="name">Name</label>
    {errorName && (<div  style={{ color:"white" , marginBottom:"5px" ,position:"relative" ,top:"-15px"  ,fontSize:"11px"}}>{errorName}</div>)}
    </div>
<div className={css.group}>
    <input   type="email" id="email" name="user_email" required="" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <label htmlFor="email">Email</label>
    </div>
    {errorEmail && (<div  style={{ color:"white"  , marginBottom:"5px" ,position:"relative" ,top:"-15px"  ,fontSize:"11px"}}>{errorEmail}</div>)}
<div className={css.group}>
    <textarea id="comment" name="message" rows="5" required="" value={comment} onChange={(e)=>{setComment(e.target.value)}}/>
    <label htmlFor="comment">Comment</label>
    {errorComment && (<div  style={{ color:"white" , marginBottom:"5px" ,position:"relative" ,top:"-15px"  ,fontSize:"11px"}}>{errorComment}</div>)}
</div>
    <button type="submit" onClick={()=>{

        setComment('');
  setEmail('');
  setName('');
    }}>Submit</button>
  </form>
</div>


            </motion.div>
          </div>
        </div>
      </div>
    </section>
    // <motion.section
    // variants={staggerChildren}
    // initial="hidden"
    // whileInView="show"

    // className={`paddings ${ css.warpper }`}>
    //     <motion.div
    //     variants={footerVariants}
    //     className={`flexCenter ypaddings innerWidth ${ css.container }`}>
    //         <div className={css.left}>
    //             <span className="primaryText">
    //                 Let's make somthing <br/> amazing together.

    //             </span>
    //             <span className='primaryText'>
    //                 start by <a href='mailto:m.bander.it@gmail.com'>Saying Hi</a>

    //             </span>
    //         </div>
    //         <div className={css.right}>

    //                 <div className={css.infoFooter}>
    //                     <span className="peimaryText">Information</span>
    //                     <p>Jamal Streat , Taiz - Yemen</p>

    //                 </div>
    //                 <div className={css.menu}>
    //                     <li>Service</li>
    //                     <li>Works</li>
    //                     <li>Notes</li>
    //                     <li>Experience</li>
    //                 </div>

    //              </div>

    //         </motion.div>

    //         </motion.section>
  );
};
