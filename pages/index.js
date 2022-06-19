import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { Login } from './Login'

const HomeS = () => {
  return (
    <div className="flex min-h-screen w-full ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
       </div>
  )
}

export default HomeS
