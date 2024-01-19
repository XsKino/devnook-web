// import axios from 'axios'

export default async function Members() {
  // const members = (await axios.get('/api/members')).data
  const members = [
    {
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
    },
    {
      name: 'Andrés Piñón',
      alias: 'Kino',
      email: 'andresprza@gmail.com',
      imageURL:
        'https://instagram.fcuu1-1.fna.fbcdn.net/v/t51.2885-19/368130118_265363082947562_8467053716974440626_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcuu1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=m5EJYgV3z_8AX-d6_Ay&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBolkJD1qG7uWQzvYUCqeDTAu7F9ivgbO7kgovQ9PJlLg&oe=64F9E46B&_nc_sid=ee9879',

      socials: {
        github: {
          name: 'GitHub',
          url: 'https://.github.com/andresprza'
        },
        instagram: {
          name: 'Instagram',
          url: 'https://www.instagram.com/andresprza'
        },
        twitter: {
          name: 'Twitter',
          url: 'https://www.twitter.com/andresprza'
        },
        linkedin: {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/andresprza'
        }
      }
    },
    {
      name: 'Leopoldo Armendáriz',
      alias: 'Polo',
      email: 'poloarmendariz@noencontretucorreo.com',
      imageURL: 'https://avatars.githubusercontent.com/u/62722427?v=4',
      socials: {
        github: {
          name: 'GitHub',
          url: 'https://github.com/AlejaArmen'
        },
        linkedin: {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/ing-leopoldo-armendariz/'
        }
      }
    },
    {
      name: 'Kaleb Rodríguez',
      alias: 'Kira',
      email: 'kirabelak@noencontretucorreo.com',
      imageURL: 'https://avatars.githubusercontent.com/u/54724730?v=4',
      socials: {
        github: {
          name: 'GitHub',
          url: 'https://github.com/KiraBelak/'
        },
        instagram: {
          name: 'Instagram',
          url: 'https://www.instagram.com/kirabelak/'
        },
        twitter: {
          name: 'Twitter',
          url: 'https://twitter.com/kirabelak'
        },
        linkedin: {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/kaleb-rodr%C3%ADguez/'
        }
      }
    }
  ]

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
