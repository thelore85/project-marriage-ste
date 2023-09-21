import React from "react";
import styles from '@/Components/Contact/Contact.module.css'

const Contact = () => {
  return (
    <section id='contact' className={styles.contact}>
      <div className={styles.wrapper}>
        <div>
          <h1>Conferma la tua presenza</h1>
          <div className='divider-white'></div>
          <img className="logo" src="img/ramona-stefano-white.png" height='20px'/>
          <div className='divider-white'></div>

   
        </div>
        <div className={styles.formContainer}>
          <form action="/action_page.php">
            <label htmlFor="fname">Nome</label>
            <input type="text" id="fname" name="firstname" className={styles.inputField} placeholder="Inserisci il tuo nome" />
            <label htmlFor="lname">Cognome</label>
            <input type="text" id="lname" name="lastname" className={styles.inputField} placeholder="Inserisci il tuo cognome" />
            <label htmlFor="country">Accompagnatori</label>
            <input type="number" id="accompagnatori" name="accompagnatori" className={styles.inputField} placeholder="Con quante persone verrari? (numero)" min="0" max="10" />
            <label htmlFor="fname">Contatti</label>
            <input type="tel" id="lname" name="lastname" className={styles.inputField} placeholder="Numero di cellulare" />
            <input type="email" id="lname" name="lastname" className={styles.inputField} placeholder="email" />
            <p>Useremo il tuo contatto solo in caso di comunicazioni importanti relative al programma dell'evento.</p>

            <input type="submit" value="Conferma" className={`button-white ${styles.formButton}`}/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
