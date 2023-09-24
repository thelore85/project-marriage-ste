import React from "react";
import styles from '@/Components/Date/Date.module.css'



const Date = () => {
  return(

    <section id="when" className={styles.when}>
    <div>
      <h2> Non puoi mancare</h2>
      <div className='divider'></div>
      <img className="logo" src="img/ramona-stefano-dark.png" height='20px'/>
      <div className='divider'></div>

      <h5>Segna la data</h5>
      <div className={styles.date}>
        {/* <h3>14-9-2024</h3> */}
        <span className={styles.month}>Settembre</span>
        <span className={styles.day}>14</span>
        <span className={styles.year}>2024</span>
        <div className={styles.divider}></div>
        <span className={styles.weekDay}>Sabato</span>


      </div>

      <div className={styles.aforismo}>
        <p>"La vita non avrebbe senso senza l’amore che ci unisce."</p>
      </div>

      <a className="button" href='#location'>Scopri Come Raggiungerci</a>

    </div>
  </section>

  )
}

export default Date;