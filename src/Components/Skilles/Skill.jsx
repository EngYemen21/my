import React from 'react'
import css from "./Skill.module.scss";
// import boot from '../../../public/iconpng/Bootstrap.png';
import circleHtml from '../../../public/iconpng/circleHtml.png'; 
import circlePhp from '../../../public/iconpng/circlePhp.png.png';
import Css from '../../../public/iconpng/Css.png'; 
import Js from '../../../public/iconpng/Js.png';  
import Mysql from '../../../public/iconpng/Mysql.png'; 
import Xd from '../../../public/iconpng/Xd.png'; 
import Sass from '../../../public/iconpng/Sass.png'; 
import Phot from '../../../public/iconpng/Photoshop.png';
// import github from '../../../public/iconpng/github.png';
import Api from '../../../public/iconpng/Api.png'; 
import Oracle from '../../../public/iconpng/Oracle.png';
import react from '../../../public/iconpng//1611079.png';
import tailwind  from'../../../public/iconpng/ta.png';
export const Skill = () => {
  return (
  <section className={` paddings ${css.warpper}`}>
    <div id="Skills"></div>
    <span className="primaryText ypaddings">My Skills</span>
    <div className={`flexCenter innerWidth ${ css.container }`}>
    
        <div  className={`flexCenter ypaddings innerWidth ${ css.StyleBox }`}>
        <div className={css.box}>
            <img src="./iconpng/circleHtml.png" alt="php" />
            <p >HTML</p>
        </div>
        <div className={css.box}>
            <img  src="./iconpng/circlePhp.png.png" alt="php" />
            <p>PHP</p>
        </div>
        <div className={css.box}>
            <img src="./iconpng/Js.png" alt="js" />
            <p>JavaScript</p>
        </div>
        <div className={css.box}>
        <img  src="./iconpng/Css.png" alt="reactJS" />
            <p>Css</p>
        </div>
        <div className={css.box}>
        <img src="./iconpng/1611079.png" alt="reactJS" />
            <p>ReactJs</p>
        </div>
        <div className={css.box}>
        <img src="./iconpng/Sass.png" alt="sass" />
            <p>SASS</p>
        </div>
        <div className={css.box}>
        <img src="./iconpng/Bootstrap.png" alt="Bootstrap" />
            <p>Bootstrap</p>
        </div>
        <div className={css.box}>
        <img src="./iconpng/ta.png" alt="photoshop" />
            <p>Tailwind CSS</p>
        </div>
        {/* <div className={css.box}>
            <img src="/iconpng/Oracle.png" alt="oracle" />
            <p>Mlogger</p>
        </div> */}
        <div className={`${css.box}`} >
        <img src="./iconpng/Xd.png" alt="Xd" />
            <p>Adobe XD</p>
        </div>
        <div className={css.box}>
        <img  src="./iconpng/Photoshop.png" alt="Photoshop" />
            <p>Photoshop</p>
        </div>
        <div className={css.box}>
            <img  src="./iconpng/Oracle.png" alt="Oracle" />
            <p>Oracle</p>
        </div>
        <div className={css.box}>
            <img src="./iconpng/Mysql.png" alt="php" />
            <p>MySql</p>
        </div>
        <div className={css.box}>
            <img  src="./iconpng/Api.png" alt="Api" />
            <p>API's</p>
        </div>
     
     
</div>

      

   
 


    </div>
  </section>
  )
}
