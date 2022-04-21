import '../styles/globals.css'
import React, { useState } from 'react'


function MyApp({ Component, pageProps }) {
  const [account, changeAccount] = useState("lakhan")

  return <Component {...pageProps} account={account} changeAccount={changeAccount} />
}

export default MyApp
