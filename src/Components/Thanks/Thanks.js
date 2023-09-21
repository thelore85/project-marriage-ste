import React from "react";
import styles from '@/Components/Thanks/Thanks.module.css'

const Thanks = () => {
  return(
    <section id="thanks" className={styles.thanks}>
      <div className={styles.wrapper}>

        <div className={styles.title}>
          <h1>Ti aspettiamo</h1>
          <div className='divider'></div>
          <img className="logo" src="img/ramona-stefano-dark.png" height='20px'/>
          <div className='divider'></div>
        </div>

        <div className={styles.firma}>
          <h2>Ramona &<br /> Stefano</h2>
        </div>

      </div>
    </section>
  )
}

export default Thanks;