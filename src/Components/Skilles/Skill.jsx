import React from 'react'
import css from "./Skill.module.scss"
export const Skill = () => {
  return (
  <section className={` paddings ${css.warpper}`}>
    <div id="Skills"></div>
    <span className="primaryText ypaddings">My Skills</span>
    <div className={`flexCenter innerWidth ${ css.container }`}>
    
        <div  className={`flexCenter ypaddings innerWidth ${ css.StyleBox }`}>
        <div className={css.box}>
            <img src="/iconpng/circleHtml.png" alt="php" />
            <p >HTML</p>
        </div>
        <div className={css.box}>
            <img src="/iconpng/circlePhp.png.png" alt="php" />
            <p>PHP</p>
        </div>
        <div className={css.box}>
            <img src="/iconpng/Js.png" alt="js" />
            <p>JavaScript</p>
        </div>
        <div className={css.box}>
        <img src="/iconpng/Css.png" alt="reactJS" />
            <p>Css</p>
        </div>
        <div className={css.box}>
        <img src="/iconpng/1611079.png" alt="reactJS" />
            <p>ReactJs</p>
        </div>
        <div className={css.box}>
        <img src="/iconpng/Sass.png" alt="sass" />
            <p>SASS</p>
        </div>
        <div className={css.box}>
        <img src="/iconpng/Bootstrap.png" alt="Bootstrap" />
            <p>Bootstrap</p>
        </div>
        <div className={css.box}>
        <img src="/iconpng/ta.png" alt="photoshop" />
            <p>Tailwind CSS</p>
        </div>
        {/* <div className={css.box}>
            <img src="/iconpng/Oracle.png" alt="oracle" />
            <p>Mlogger</p>
        </div> */}
        <div className={`${css.box}`} >
        <img src="/iconpng/Xd.png" alt="Xd" />
            <p>Adobe XD</p>
        </div>
        <div className={css.box}>
        <img src="/iconpng/Photoshop.png" alt="Photoshop" />
            <p>Photoshop</p>
        </div>
        <div className={css.box}>
            <img src="/iconpng/Oracle.png" alt="Oracle" />
            <p>Oracle</p>
        </div>
        <div className={css.box}>
            <img src="circlePhp.png.png" alt="php" />
            <p>MySql</p>
        </div>
        <div className={css.box}>
            <img src="/iconpng/Api.png" alt="Api" />
            <p>API's</p>
        </div>
     
     
</div>

      

   
 


    </div>
  </section>
  )
}
