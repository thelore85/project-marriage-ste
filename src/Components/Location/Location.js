import React from "react";
import styles from '@/Components/Location/Location.module.css'

const Location = () => {
  return(
    
    
    <section id="location" className={styles.whereSection} >

      <div className={styles.sectionTitle}>
        <h2>Dove ti aspettiamo</h2>
        <div className='divider'></div>
      </div>
      
      <div className={styles.title}>
        <h3> Il programma della giornata</h3>
      </div>

      

      <div className={styles.cardWrapper}>

        <div className={styles.imageHeader}>
          <div className={styles.headerImgRic}></div>
          <div className={styles.headerImgChiesa}></div>    
        </div>

        <div className={styles.infoCard}>
          <div className={styles.info}>
            <h3><b>La Cerimonia</b></h3>
            <p><b>Parrocchia S. Giovanni Battista</b></p>
            <p><b>Ore 10.00</b><br />
            Piazza S. Giovanni, 4 <br />
            20151 Milano - MI<br />
            </p>
            <a className="button" href='https://maps.app.goo.gl/o3do7YqHVkbvF1M19' target="_blank">Apri la mappa</a>
          </div>

          <div className={styles.locationImgChiesa}></div>    
        </div>

        <div className='divider'></div>

        <div className={styles.infoCard}>
          <div className={styles.locationImgRic}></div>    
         
          <div className={styles.info}>
            <h3><b>Il ricevimento</b></h3>
            <p><b>Galbusera Nera</b></p>
            <p><b>h 14.30</b><br /> Via Galbusera Nera, 23888 <br/>
            La Valletta Brianza - Lecco<br />
            </p>
            <a className="button" href='https://maps.app.goo.gl/Vv8EyhzBuNKFeZ4k6' target="_blank">Apri la mappa</a>
          </div>

        </div>

        

      </div>

    </section>




  )
}

export default Location