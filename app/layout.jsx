import '@/styles/globals.css'

import { quicksand } from '@/styles/fonts'
import { clubName, clubDescription } from '@/data/info'

// import axios from 'axios'

import { Providers } from './providers'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: clubName,
  description: clubDescription
}

export default async function RootLayout({ children }) {
  // const { data } = await axios.post(process.env.BASE_URL + '/api/login')

  return (
    <html lang='es' className='dark overflow-x-hidden w-screen'>
      <body className={`${quicksand} text-foreground font-normal bg-background w-screen`}>
        <Providers>
          <Navbar userData={data} className='fixed' />
          <main className='m-auto max-w-screen-md relative'>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
