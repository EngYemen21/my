import React from 'react'
import css from "./Skill.module.scss";
import boot from '../../../public/iconpng/Bootstrap.png';
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
            <img src={circleHtml} alt="php" />
            <p >HTML</p>
        </div>
        <div className={css.box}>
            <img src={circlePhp} alt="php" />
            <p>PHP</p>
        </div>
        <div className={css.box}>
            <img src={Js} alt="js" />
            <p>JavaScript</p>
        </div>
        <div className={css.box}>
        <img src={Css} alt="reactJS" />
            <p>Css</p>
        </div>
        <div className={css.box}>
        <img src={react} alt="reactJS" />
            <p>ReactJs</p>
        </div>
        <div className={css.box}>
        <img src={Sass} alt="sass" />
            <p>SASS</p>
        </div>
        <div className={css.box}>
        <img src={boot} alt="Bootstrap" />
            <p>Bootstrap</p>
        </div>
        <div className={css.box}>
        <img src={tailwind} alt="photoshop" />
            <p>Tailwind CSS</p>
        </div>
        {/* <div className={css.box}>
            <img src="/iconpng/Oracle.png" alt="oracle" />
            <p>Mlogger</p>
        </div> */}
        <div className={`${css.box}`} >
        <img src={Xd} alt="Xd" />
            <p>Adobe XD</p>
        </div>
        <div className={css.box}>
        <img src={Phot} alt="Photoshop" />
            <p>Photoshop</p>
        </div>
        <div className={css.box}>
            <img src={Oracle} alt="Oracle" />
            <p>Oracle</p>
        </div>
        <div className={css.box}>
            <img src={Mysql} alt="php" />
            <p>MySql</p>
        </div>
        <div className={css.box}>
            <img src={Api} alt="Api" />
            <p>API's</p>
        </div>
     
     
</div>

      

   
 


    </div>
  </section>
  )
}
