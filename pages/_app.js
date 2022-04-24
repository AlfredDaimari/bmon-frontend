import '../styles/globals.css'
import React, { useState } from 'react'
import io from 'socket.io-client'

const socket = io.connect("http://localhost:4001")


function MyApp({ Component, pageProps }) {
  const [account, changeAccount] = useState("")

  return <Component {...pageProps} account={account} changeAccount={changeAccount} socket={socket} />
}

export default MyApp
