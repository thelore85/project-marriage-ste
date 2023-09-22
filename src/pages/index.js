import Head from 'next/head'
import Cover from '@/Components/Cover/Cover.js'
import Date from '@/Components/Date/Date.js'
import Location from '@/Components/Location/Location.js'
import Contact from '@/Components/Contact/Contact.js'
import Thanks from '@/Components/Thanks/Thanks.js'


///////////////////////////////////////////
//// ----------- SERVER CONNECTION
//////////////////////////////////////////

export let serverUrl;
const serverPort = 9000;  // Cuse the same port of the server
const serverPath = '/project-marriage-ste' // place here your project path
const serverAdress = 'https://server-piqus.vercel.app';
const serverLive = `${serverAdress}${serverPath}`;
const serverLocal = `http://localhost:${serverPort}${serverPath}`

const  appEnv = process.env.NODE_ENV || 'development';
const serverUrlbuilder = () => {
  if(appEnv === 'development' ){
    serverUrl = serverLocal
  }else{
    serverUrl = serverLive
  }
};

serverUrlbuilder();

// ////////////////////// end server////////////////



////////////////////////////////////////////////////
/////----------- WEB APP 
//////////////////////////////////////////////////

console.log('APP START: running on server: 3000');

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
      <Contact serverUrl = { serverUrl}/>
      <Thanks />
    </>
  )
}
