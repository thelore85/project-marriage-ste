import React, { useState } from "react";
import styles from "@/Components/Messages/Messages.module.css";
import { messages } from "@/Asset/dbMessages.js";

const Messages = () => {

  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };


  const handleSendMessage = () => {

    if (inputText.trim() !== "") { //check input is not empty
      const newMessage = {
        id: messages.length + 1,
        message: inputText,
        date: new Date(),
        userType: 'guest',
      };

      // Aggiungi il nuovo messaggio all'array 'messages' nel tuo database
      messages.push(newMessage);

      // clear input
      setInputText("");
    }
  };

  return (
    <section id="messages" className={styles.messages}>


        <div className={styles.containerMessages}>
          <ul>
            {messages.map((el) => {
              const messageDate = new Date(el.date);
              const formattedDate = `${messageDate.getDate()}-${messageDate.getMonth()+1}-${messageDate.getFullYear()}`;
              return (<li key={el.id}> <p>{el.message}</p> <p className={styles.date}>{formattedDate}</p> </li> );  })}
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
