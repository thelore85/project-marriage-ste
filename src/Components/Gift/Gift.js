import React, {useState, useRef} from 'react';
import ClipboardJS from 'clipboard';
import styles from '@/Components/Gift/Gift.module.css';

const Gift = () => {

  const [ textCopyStatus, setTestCopyStatus ] = useState(false)

  const textToCopyRef = useRef(null);
  const copyButtonRef = useRef(null);


  const memorizzaTesto = () => {

    const textToCopy = textToCopyRef.current.innerText;

    const clipboard = new ClipboardJS(copyButtonRef.current, {
      text: function () {
        return textToCopy;
      },
    });

    clipboard.on('success', function (e) {
      e.clearSelection();
      setTestCopyStatus(true)
    });

    clipboard.on('error', function (e) {
      console.error('Errore durante la copia del testo: ', e);
    });

    // Simula un clic sul pulsante di copia
    if (copyButtonRef.current) {
      copyButtonRef.current.click();
    }
  };



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
            <p>Puoi mandarci il tuo contributo al seguente recapito bancario:</p>

            <div className={styles.iban}>

              <div>
                <p><b>IBAN</b> <span ref={textToCopyRef} >IT30I0100501620000000005724</span></p>
              </div>

              <div className={ styles.copyButtonContainer}>
                { textCopyStatus ? <span className={styles.copyIconOk}> OK!</span>
                    : <img ref={copyButtonRef} onClick={memorizzaTesto} className={styles.copyIcon} src="img/copy-icon.png" height='25px'/>
                }
              </div>

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