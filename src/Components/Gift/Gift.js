import React from 'react';
import styles from '@/Components/Gift/Gift.module.css';

const Gift = () => {
  return(
    <section id='gift' className={styles.gift}>
      <div className={styles.wrapper}>

        <div className={styles.contentContainer}>

          <div className={styles.title}>
            <h2>Il viaggio dei <br />nostri sogni</h2>
            <div className='divider'></div>
            <img className="logo" src="img/ramona-stefano-dark.png" height='20px'/>
            <div className='divider'></div>
            <h3>Se ti fa piacere, aiutaci a realizzarlo</h3>
          </div>
          <div className={styles.imageMobile}></div>
       
          <div className={styles.ibanContainer}>
            <p>Puoi mandarci il tuo contributo ai seguenti recapiti bancari:</p>
            <div className={styles.iban}>
              <p><b>IBAN</b> <span>IT30I0100501620000000005724</span></p>
              <img className={styles.copyIcon} src="img/copy-icon.png" height='25px'/>
            </div>
            <p>Nella causale non dimenticarti di inserire il tuo nome cosi possiamo ringraziarti!</p>
          </div>

        </div>

        <div className={styles.imageContainer}>

        </div>

      </div>
    </section>
  )
}

export default Gift;