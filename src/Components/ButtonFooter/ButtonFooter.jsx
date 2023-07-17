import React from 'react'
import css from './ButtonFooter.module.scss'
export const ButtonFooter = () => {
  return (
    <section style={{ background:"#342985" }} className={`paddings ${css.warpper}`}>
    <div className={` flexCenter ypaddings innerWidth ${css.container}`}>
        <h3 style={{ textAlign:"center" }}>&copy; mohammed Bander</h3>
        </div>
        </section>
  )
}
