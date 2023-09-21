import Head from 'next/head'
import Cover from '@/Components/Cover/Cover.js'
import Date from '@/Components/Date/Date.js'
import Location from '@/Components/Location/Location.js'
import Contact from '@/Components/Contact/Contact.js'
import Thanks from '@/Components/Thanks/Thanks.js'



export default function Home() {
  return (
    <>
      <Head>
        <title>Ramona e Stefano si sposano</title>
        <meta name="description" content="Sei invitato al nostro matrimonio a Milano. Ti aspettiamo il 14 settembre 2024 " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cover />
      <Date />
      <Location />
      <Contact />
      <Thanks />
    </>
  )
}
