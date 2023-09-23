import React from "react";
import Messages from '@/Components/Messages/Messages.js'
import styles from '@/Components/Thanks/Thanks.module.css'

const Thanks = ({ serverUrl }) => {
  return(
    <section id="thanks" className={styles.thanks}>
      <div className={styles.wrapper}>

        <div className={styles.greetingsContainer} >

          <div className={styles.firmaContainer}>
            <div className={styles.title}>
              <h2>Ti aspettiamo</h2>
              <div className='divider'></div>
              <img className="logo" src="img/ramona-stefano-dark.png" height='20px'/>
              <div className='divider'></div>
            </div>
            <div className={styles.firma}>
              <h2>Ramona &<br /> Stefano</h2>
            </div>
          </div>

          <div className={styles.containerMessages}>
            <div className={styles.subtitle}>
              <h3>Lasciaci un messaggio di auguri!</h3>
            </div>
            <Messages serverUrl = { serverUrl} />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Thanks;