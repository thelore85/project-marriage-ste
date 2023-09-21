import Head from 'next/head'
import React from "react"
import Messages from '@/Components/Messages/Messages.js'

const Bacheca = () => {

  return(
    <>

      <Head>
        <title>Ramona e Stefano - La bacheca</title>
        <meta name="description" content="Interagisci con gli sposi e tutti gli invitati!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/7efa7486da.js" crossorigin="anonymous"></script>
      </Head>

      <Messages />
    </>

  )
}

export default Bacheca