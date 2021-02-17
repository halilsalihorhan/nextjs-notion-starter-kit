import Document, { Head, Html, Main, NextScript } from 'next/document'

import { IconContext } from 'react-icons'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href={process.env.NEXT_PUBLIC_favicon} />

          </Head>

          <body>
            <script src='noflash.js' />

            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
