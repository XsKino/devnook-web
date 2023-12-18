import { User } from '@nextui-org/user'
import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import { Dropdown, DropdownMenu, DropdownItem, DropdownTrigger } from '@nextui-org/dropdown'
import NextLink from 'next/link'

export default function MyUser({ userData, items, setUser }) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <User
          className='cursor-pointer'
          name={userData.name}
          isFocusable
          description={
            <Link href={userData.socials.twitter.url || '#'} size='sm' isExternal as={NextLink}>
              @{userData.alias}
            </Link>
          }
          avatarProps={{
            src: userData.imageURL
          }}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label='User Actions' items={items}>
        {item =>
          item.key === 'logout' ? (
            <DropdownItem key={item.key} as={Button} color='danger' onClick={() => setUser(null)}>
              {item.label}
            </DropdownItem>
          ) : (
            <DropdownItem key={item.key} href={item.href} as={NextLink}>
              {item.label}
            </DropdownItem>
          )
        }
      </DropdownMenu>
    </Dropdown>
  )
}
