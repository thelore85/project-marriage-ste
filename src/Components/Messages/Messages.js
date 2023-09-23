import React, { useState, useEffect } from "react";
import styles from "@/Components/Messages/Messages.module.css";

const Messages = ({ serverUrl }) => {

  const [inputText, setInputText] = useState("");
  const [ printMessage, setPrintMessage ] = useState([]);

  useEffect(() => {
    loadDb();
  }, []);

  const loadDb = () => {
    fetch(`${serverUrl}/get-messages`)
    .then(res => res.json())
    .then(res => setPrintMessage(res))
  }
  
  const handleSendMessage = () => {

    if (inputText.trim() !== "") { //check input is not empty

      // fetch the server call
      fetch(`${serverUrl}/push-message`,   {
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          testo: inputText,
          data: new Date(),
          user_type: 'guest'
        })
      })
      .then(res => res.json())
      .then(res => setPrintMessage([...printMessage, res[0]]))

      // clear input
      setInputText("");
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };


  return (
    <section id="messages" className={styles.messages}>

        <div className={styles.containerMessages}>
          <ul>
            {printMessage.map((el) => {
              const messageDate = new Date(el.data);
              const formattedDate = `${messageDate.getDate()}-${messageDate.getMonth()+1}-${messageDate.getFullYear()}`;
              return (<li key={el.id}> <p>{el.testo}</p> <p className={styles.date}>{formattedDate}</p> </li> );  })}
          </ul>
        </div>

        <div className={styles.messageInput}>
          <input type="text" value={inputText} onChange={handleInputChange} placeholder="Scrivi il tuo messaggio..." />
          <div className={styles.icon} onClick={handleSendMessage}> <span>{'>'}</span> </div>
        </div>

    </section>
  );
};

export default Messages;
