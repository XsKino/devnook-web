import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST(req, res) {
  // MOCKED DATA
  const user = (await axios.get('http://localhost:3000/api/members')).data[0]
  return NextResponse.json({ ...user, verified: true })
}
