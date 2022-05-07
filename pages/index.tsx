import type { NextPage } from 'next'
import Head from 'next/head'
import MyAccount from '../components/MyAccount'
import { Web3Provider, Web3ConnectButton } from '../components/MyWeb3'

const Home: NextPage = () => {
  return (
    <Web3Provider>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>My Rainbow-kit hello-world</title>
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <Web3ConnectButton />
          <MyAccount />
        </main>
      </div>
    </Web3Provider>
  )
}

export default Home
