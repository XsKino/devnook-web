import axios from 'axios'

export default async function Members() {
  const members = (await axios.get('http://localhost:3000/api/members')).data

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
