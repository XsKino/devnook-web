import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST(req, res) {
  // MOCKED DATA
  const user = (await axios.get('/api/members')).data[0]
  return NextResponse.json({ ...user, verified: true })
}
