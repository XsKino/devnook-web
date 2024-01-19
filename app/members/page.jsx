import axios from 'axios'

export default async function Members() {
  const members = (await axios.get('/api/members')).data

  return (
    <ul>
      {members.map(member => (
        <li key={member.email}>
          <p>{member.name}</p>
        </li>
      ))}
    </ul>
  )
}
