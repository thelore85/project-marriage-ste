import React from "react";
import styles from '@/Components/Location/Location.module.css'

const Location = () => {
  return(
    
    
    <section id="where" className={styles.whereSection} >

      <div className={styles.sectionTitle}>
        <h2>Dove ti aspettiamo</h2>
        <div className='divider'></div>
      </div>
      
      <div className={styles.title}>
        <h3> Il programma della giornata</h3>
      </div>

      

      <div className={styles.cardWrapper}>

        <div cassName={styles.imageHeader}>
          <div className={styles.headerImg}></div>
          <div className={styles.headerImg}></div>    
        </div>

        <div className={styles.infoCard}>
          <div className={styles.info}>
            <h3><b>La Cerimonia</b></h3>
            <p><b>Chiesa San Giuseppe - h 10.00</b></p>
            <p>In via madreperla, 4 <br />
            Castigliano Monzano - Como<br />
            </p>
            <a className="button" href='https://maps.app.goo.gl/QYnQEibZwgoLmagK9' target="_blank">Apri la mappa</a>
          </div>

          <div className={styles.locationImg}></div>    
        </div>

        <div class='divider'></div>

        <div className={styles.infoCard}>
          <div className={styles.locationImg}></div>    
         
          <div className={styles.info}>
            <h3><b>Il ricevimento</b></h3>
            <p><b>Palazzo Madre - h 14.30</b></p>
            <p>In via madreperla, 4 <br/>
            Castigliano Monzano - Como<br />
            </p>
            <a className="button" href='https://maps.app.goo.gl/QYnQEibZwgoLmagK9' target="_blank">Apri la mappa</a>
          </div>

        </div>

        

      </div>

    </section>




  )
}

export default Location