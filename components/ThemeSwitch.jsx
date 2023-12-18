'use client'

import { Switch } from '@nextui-org/switch'
import { useTheme } from 'next-themes'
import { PiSunDimFill } from 'react-icons/pi'
import { RiMoonClearFill } from 'react-icons/ri'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <Switch
      isSelected={theme === 'dark'}
      size='lg'
      color='primary'
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      startContent={<RiMoonClearFill />}
      endContent={<PiSunDimFill />}
    />
  )
}
