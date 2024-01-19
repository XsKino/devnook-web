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
  // const { data } = await axios.post('/api/login')
  const data = {
    name: 'John Doe',
    alias: 'itchiiclubs',
    email: 'johndoe@itchiiclubs.com',
    imageURL: 'https://th.bing.com/th/id/OIP.7bPuEJb3_lCl6kXl6PTEGQAAAA?pid=ImgDet&w=201&h=201&c=7',
    socials: {
      facebook: {
        name: 'Facebook',
        url: 'https://www.facebook.com/itchiiclubs'
      },
      instagram: {
        name: 'Instagram',
        url: 'https://www.instagram.com/itchiiclubs'
      },
      twitter: {
        name: 'Twitter',
        url: 'https://www.twitter.com/itchiiclubs'
      },
      linkedin: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/itchiiclubs'
      }
    }
  }

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
