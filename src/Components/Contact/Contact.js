import React from "react";
const _ = require('lodash');
import { useState } from 'react';
import styles from '@/Components/Contact/Contact.module.css'

const Contact = ({ serverUrl }) => {


  /////////////////////////////
  /// SET DEFAULT STATE

  const [ formData, setFormData ] = useState({
    name: '',
    lastName: '',
    guest: 0,
    phone: '',
    email: '',
  });

  const [ emailStatus, setEmailStatus ] = useState('pending')


  ///////////////////////
  // STATUS UPDATE - data from form input

  const handleFormName = (e) => {
    setFormData({...formData, name: _.capitalize(e.target.value)});
  }

  const handleFormLastName = (e) => {
    setFormData({...formData, lastName: _.capitalize(e.target.value)});
  }

  const handleGuest = (e) => {
    setFormData({...formData, guest: parseInt(e.target.value)});
  }

  const handlePhone = (e) => {
    setFormData({...formData, phone: parseInt(e.target.value)});
  }

  const handleEmail = (e) => {
    setFormData({...formData, email: e.target.value});
  }


  const showEmailConfirmationPopUp = (status) => { 
    if(status === true){ setEmailStatus(true)}
    else{ setEmailStatus(false)}    
  }


// const showEmailConfirmationPopUp = (status = 'pending') => {
//   return status !== 'pending';
// }

//////////////////////////
// EMAIL - sending data to server
 const emailSending = () => {


  console.log(serverUrl)
  fetch(`${serverUrl}/send-email`,   {
    method: 'post',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({
      name: formData.name, 
      lastname: formData.lastName, 
      guest: formData.guest,
      phone: formData.phone,
      email: formData.email,
     })
    })
  .then(response => {
    if(response.status === 200){ 
      console.log('server status', response.status)
      showEmailConfirmationPopUp(true)
    }else{
      console.log('server status', response.status)
      showEmailConfirmationPopUp(false)
    }
    return response.json()
  })
  .then(message => {
    console.log('Email delivery: ', message)
  })
}

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
            <input type="text" id="fname" name="firstname" className={styles.inputField} placeholder="Inserisci il tuo nome" onChange={ handleFormName }/>
            <label htmlFor="lname">Cognome</label>
            <input type="text" id="lname" name="lastname" className={styles.inputField} placeholder="Inserisci il tuo cognome" onChange={ handleFormLastName } />
            <label htmlFor="country">Accompagnatori</label>
            <input type="number" id="accompagnatori" name="accompagnatori" className={styles.inputField} placeholder="Con quante persone verrari? (numero)" min="0" max="10" onChange={handleGuest} />
            <label htmlFor="fname">Cellulare</label>
            <input type="tel" id="lname" name="lastname" className={styles.inputField} placeholder="Numero di cellulare" onChange={handlePhone}/>
            <label htmlFor="fname">Email</label>
            <input type="email" id="lname" name="lastname" className={styles.inputField} placeholder="email" onChange={handleEmail}/>
            <p>Useremo il tuo contatto solo in caso di comunicazioni importanti relative al programma dell'evento.</p>

            <a className='button-white' onClick={emailSending} >invia conferma</a>
          </form>
        </div>

        <div className={styles.mail}>
          <p>Hai bisogno di maggiori dettagli o informazioni? scrivi una mail a <a href="mailto:ramona.stefano.sposi@gmail.com">ramona.stefano.sposi@gmail.com</a></p>
          {/* password della mail: "RamonaStefano2024" */}
        </div>
      
        {
          emailStatus === 'pending' ? null : ( emailStatus ? (
              <div className={styles.badgeOk}>
                <p>Grazie per aver confermato! <br />
                Ti aspettiamo alla nostra cerimonia</p>
              </div>
            ) : (
              <div className={styles.badgeKo}>
                <p>Invio email fallito! <br />
                tutti i campi sono obbligatori</p>
              </div>
            ))
        }

      </div>
    </section>
  )
}

export default Contact;
