import '@/styles/globals.css'

import { quicksand } from '@/styles/fonts'

import axios from 'axios'

import { Providers } from './providers'
import Navbar from '@/components/Navbar'

export default async function RootLayout({
  children
}) {
  const {
    data
  } =
    await axios.post(
      'http://localhost:3000/api/login'
    )

  return (
    <html
      lang='en'
      className='dark'>
      <head>
        <title>
          club's
        </title>
      </head>
      <body
        className={`${quicksand} text-foreground font-normal bg-background`}>
        <Providers>
          <Navbar
            userData={
              data
            }
          />
          <main className='m-auto p-5 lg:p-0 lg:w-7/12'>
            {
              children
            }
          </main>
        </Providers>
      </body>
    </html>
  )
}
