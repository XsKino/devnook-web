// import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST(req, res) {
  // MOCKED DATA
  // const user = (await axios.get('/api/members')).data[0]
  const user = {
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
  return NextResponse.json({ ...user, verified: true })
}
