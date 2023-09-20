import React from "react";
import styles from '@/Components/Location/Location.module.css'

const Location = () => {
  return(
    
    
    <section id="where" className={styles.where} >
    <div>

      <h2>Dove ti aspettiamo</h2>
      <div className='divider'></div>

      <div className="wrapper">

        <div className={styles.locationCard}>
          <h3> Il ricevimento</h3>

          <div className={styles.infoWrapper}>
            <div>
              <p><b>Ristorante Galbusera Nera</b></p>
              <p>In via madreperla, 4 <br />
              Castigliano Monzano - Como<br />
              Ore 10.00</p>
              <a className="button" href='https://maps.app.goo.gl/QYnQEibZwgoLmagK9' target="_blank">Apri la mappa</a>
            </div>
            <div className={styles.locationImg}></div>
           
          </div>

          <img className={styles.mapImage} src="/img/ric-map.png" alt='map'></img>
        </div>

        <div className="location ricevimento">
          <h3>La cerimonia</h3>

          <div className={styles.infoWrapper}>
            <div>
              <p><b>Chiesa S. Giovanni</b></p>
              <p>In via madreperla, 4 <br />
              Castigliano Monzano - Como<br />
              Ore 10.00</p>
              <a className="button" href='https://maps.app.goo.gl/QYnQEibZwgoLmagK9' target="_blank">Apri la mappa</a>
            </div>
            <div className={styles.locationImg}></div>
           
          </div>

          <img className={styles.mapImage} src="/img/ric-map.png" alt='map'></img>
        </div>


      </div>

    </div>
    </section>




  )
}

export default Location