
import React from "react"
import styles from '@/Components/Cover/Cover.module.css'


const Cover = () => {
  return(

  <main id="hero" className={styles.main}>
    <div className={styles.coverCard}>

      <div className={styles.coverImage}>
        <div>
          <h1 className={styles.title}> ramona & stefano</h1>
          <h3>
          {/* <img className={styles.logo} src="img/ramona-stefano-white.png" height='20px'/> */}
          finalmente sposi
          </h3>
          <p>Unisciti a noi nel giorno più speciale della nostra vita.</p>
        </div>
      </div>

      <div className={styles.coverInfo}>

        <h3> Sei invitato al nostro matrimonio!</h3>
        <div className='divider'></div>
        <img className="logo" src="img/ramona-stefano-dark.png" height='20px'/>
        <div className='divider'></div>
      
        <div className={styles.coverInfoDetails}>           
          <p> 14 settembre 2024<br />
              Milano - Trenno<br />
              Piazza S. Giovanni, 4, 20151<br />
              Parrocchia S. Giovanni Battista</p>
        </div>

        <a href="#contact" className='button'>conferma la presenza</a>
      </div>

    </div>
  </main>

  )
}

export default Cover