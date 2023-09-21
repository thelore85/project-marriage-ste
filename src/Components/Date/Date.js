import React from "react";
import styles from '@/Components/Date/Date.module.css'



const Date = () => {
  return(

    <section id="when" className={styles.when}>
    <div>
      <h2> Non puoi mancare</h2>
      <div className='divider'></div>

      <h5>Segnati la data</h5>
      <div className={styles.date}>
        <h3>14-9-2024</h3>
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