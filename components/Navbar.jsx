/* eslint-disable no-unused-vars */
'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem
} from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import { Button, ButtonGroup } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'

import User from '@/components/User'
import ThemeSwitch from '@/components/ThemeSwitch'
import { fugazOne } from '@/styles/fonts'
import { FaRocket } from 'react-icons/fa'

import { useState } from 'react'
import NextLink from 'next/link'
import { clubName } from '@/data/info'

export default function MyNavBar({ userData, className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState(userData)
  const menuItems = [
    {
      key: 'events',
      label: 'Eventos',
      id: 'eventos'
    },
    {
      key: 'projects',
      label: 'Proyectos',
      id: 'proyectos'
    },
    {
      key: 'galery',
      label: 'Galería',
      id: 'galeria'
    },
    {
      key: 'info',
      label: 'Info',
      id: 'faq'
    }
  ]

  return (
    <Navbar
      maxWidth='md'
      className={`font-medium ${className}`}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
          onChange={() => setIsMenuOpen(!isMenuOpen)}
        />
        <NavbarBrand
          className={`font-bold text-xl cursor-pointer group ${fugazOne.className}`}
          onClick={() => {
            const $header = document.getElementById('header')
            $header.scrollIntoView({ behavior: 'smooth' })
          }}>
          <FaRocket className='inline-block mr-2 group-hover:text-primary transition-colors' />
          <div className='flex flex-col w-min'>
            <p className='bg-clip-text transition-all translate-y-1 group-hover:translate-y-0 group-hover:text-transparent bg-gradient-to-br from-primary to-secondary'>
              {clubName}
            </p>
            <div className='w-full h-[2px] scale-x-0 transition-transform group-hover:scale-x-100 bg-gradient-to-r from-primary to-secondary' />
          </div>
        </NavbarBrand>
        <NavbarContent className='hidden sm:flex' justify='start'>
          <ThemeSwitch />
        </NavbarContent>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <ButtonGroup variant='light' color='foreground'>
          {menuItems.map((item, index) => (
            <Button
              key={`${item.id}-${index}`}
              onPress={() => {
                const $section = document.getElementById(item.id)
                $section.scrollIntoView({ behavior: 'smooth' })
              }}>
              {item.label}
            </Button>
          ))}
        </ButtonGroup>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <button
              onClick={() => {
                setIsMenuOpen(false)
                const $section = document.getElementById(item.id)
                $section.scrollIntoView()
              }}
              className='w-full text-start'>
              {item.label}
            </button>
          </NavbarMenuItem>
        ))}
        <Divider />
        <ThemeSwitch />
      </NavbarMenu>
    </Navbar>
  )
}
