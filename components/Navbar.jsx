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
import {
  Button,
  ButtonGroup
} from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'

import User from '@/components/User'
import ThemeSwitch from '@/components/ThemeSwitch'
import { fugazOne } from '@/styles/fonts'
import { FaRocket } from 'react-icons/fa'

import { useState } from 'react'
import NextLink from 'next/link'
import { clubName } from '@/data/info'

export default function MyNavBar({
  userData,
  className
}) {
  const [
    isMenuOpen,
    setIsMenuOpen
  ] =
    useState(
      false
    )
  const [
    user,
    setUser
  ] =
    useState(
      userData
    )
  const menuItems =
    [
      {
        key: 'events',
        label:
          'Eventos',
        href: '/#'
      },
      {
        key: 'projects',
        label:
          'Proyectos',
        href: '/#'
      },
      {
        key: 'members',
        label:
          'Miembros',
        href: '/members'
      }
    ]
  const userMenuItems =
    [
      {
        key: 'profile',
        label:
          'Perfil',
        href: '/#'
      },
      {
        key: 'logout',
        label:
          'Cerrar sesión',
        href: '/#'
      }
    ]
  const guestMenuItems =
    [
      {
        key: 'login',
        label:
          'Iniciar sesión',
        href: '/#'
      },
      {
        key: 'register',
        label:
          'Registrarse',
        href: '/#'
      }
    ]

  return (
    <Navbar
      shouldHideOnScroll
      className={`font-medium ${className}`}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={
            isMenuOpen
              ? 'Close menu'
              : 'Open menu'
          }
          className='sm:hidden'
          onChange={() =>
            setIsMenuOpen(
              !isMenuOpen
            )
          }
        />
        <NavbarBrand
          href='/'
          className={`'font-bold text-xl cursor-pointer group ${fugazOne.className}`}
          as={
            NextLink
          }>
          <FaRocket className='inline-block mr-2 group-hover:text-primary transition-colors' />
          <div className='flex flex-col w-min'>
            <p className='bg-clip-text transition-all translate-y-1 group-hover:translate-y-0 group-hover:text-transparent bg-gradient-to-br from-primary to-secondary'>
              {
                clubName
              }
            </p>
            <div className='w-full h-[2px] scale-x-0 transition-transform group-hover:scale-x-100 bg-gradient-to-r from-primary to-secondary' />
          </div>
        </NavbarBrand>
        <NavbarContent
          className='hidden sm:flex'
          justify='start'>
          <ThemeSwitch />
        </NavbarContent>
      </NavbarContent>

      <NavbarContent
        className='hidden sm:flex gap-4'
        justify='center'>
        <ButtonGroup
          variant='light'
          color='foreground'>
          {menuItems.map(
            (
              item,
              index
            ) => (
              <Button
                key={`${item.href}-${index}`}
                as={
                  NextLink
                }
                href={
                  item.href
                }>
                {
                  item.label
                }
              </Button>
            )
          )}
        </ButtonGroup>
      </NavbarContent>
      <NavbarContent
        className='hidden sm:flex gap-4'
        justify='end'>
        {user ? (
          <User
            userData={
              user
            }
            items={
              userMenuItems
            }
            setUser={
              setUser
            }
          />
        ) : (
          guestMenuItems.map(
            (
              item,
              index
            ) => (
              <NavbarItem
                key={`${item.href}-${index}`}>
                <Button
                  color='primary'
                  variant={
                    index ===
                    guestMenuItems.length -
                      1
                      ? 'ghost'
                      : 'flat'
                  }
                  href={
                    item.href
                  }
                  as={
                    NextLink
                  }>
                  {
                    item.label
                  }
                </Button>
              </NavbarItem>
            )
          )
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map(
          (
            item,
            index
          ) => (
            <NavbarMenuItem
              key={`${item}-${index}`}>
              <Link
                color='foreground'
                className='w-full'
                href={
                  item.href
                }
                size='lg'
                as={
                  NextLink
                }>
                {
                  item.label
                }
              </Link>
            </NavbarMenuItem>
          )
        )}
        <Divider />
        {user
          ? userMenuItems.map(
              (
                item,
                index
              ) => (
                <NavbarMenuItem
                  key={`${item}-${index}`}>
                  <Button
                    href={
                      item.href
                    }
                    as={
                      NextLink
                    }
                    variant='shadow'>
                    {
                      item.label
                    }
                  </Button>
                </NavbarMenuItem>
              )
            )
          : guestMenuItems.map(
              (
                item,
                index
              ) => (
                <NavbarMenuItem
                  key={`${item}-${index}`}>
                  <Button
                    href={
                      item.href
                    }
                    as={
                      NextLink
                    }
                    variant={
                      index ===
                      guestMenuItems.length -
                        1
                        ? 'ghost'
                        : 'flat'
                    }
                    className='text-lg'>
                    {
                      item.label
                    }
                  </Button>
                </NavbarMenuItem>
              )
            )}
        <ThemeSwitch />
      </NavbarMenu>
    </Navbar>
  )
}
