/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Modal, ModalContent, useDisclosure, Button } from '@nextui-org/react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import GaleryItem from '@/components/GaleryItem'
import { RxCross1 } from 'react-icons/rx'

export default function Galery({ name = '', title, description, hallOfFame, pictures }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api || !api.scrollSnapList || !api.selectedScrollSnap || !api.scrollTo) {
      return
    }

    setCount(api.scrollSnapList().length)

    api.scrollTo(current, true)
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 0)
    })
  }, [api, current])
  return (
    <section id={name.toLowerCase()} className='py-12 px-8 md:py-24 lg:py-32  '>
      <div className='flex flex-col items-center justify-center space-y-4 text-center'>
        <div className='space-y-2'>
          <div className='inline-block rounded-lg  px-3 py-1 text-sm '>{name}</div>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>{title}</h2>
          <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
            {description}
          </p>
        </div>
      </div>
      <Carousel className='md:mx-12'>
        <CarouselContent>
          {hallOfFame.map(({ title, description, imageUrl }) => (
            <CarouselItem className='flex flex-col p-6 pl-10 ' key={title}>
              <Image
                alt={title}
                className='overflow-hidden rounded-xl object-cover object-center w-full h-auto border'
                height='310'
                src={imageUrl}
                width='550'
              />
              <div className='flex flex-col justify-center py-2 gap-1 flex-1'>
                <h3 className='text-2xl font-bold tracking-tighter sm:text-3xl'>{title}</h3>
                <p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  {description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden md:flex' />
        <CarouselNext className='hidden md:flex' />
      </Carousel>
      <div className='grid gap-8 grid-cols-[repeat(auto-fit,minmax(90px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>
        {pictures.map((picture, i) => (
          <GaleryItem
            setCurrent={setCurrent}
            index={i}
            key={picture.description}
            onOpen={onOpen}
            {...picture}
          />
        ))}
        <Modal
          placement='top'
          backdrop='opaque'
          className='justify-center bg-transparent'
          classNames={{
            backdrop: 'bg-background/90 backdrop-brightness-150 dark:backdrop-brightness-50'
          }}
          hideCloseButton
          isOpen={isOpen}
          onOpenChange={onOpenChange}>
          <ModalContent className='border-none outline-none shadow-none flex flex-col gap-6 w-full max-w-screen-md m-0 sm:m-0 self-center'>
            {onClose => (
              <>
                <Button
                  onPress={onClose}
                  isIconOnly
                  radius='full'
                  className='fixed top-4 right-6 bg-black/30 hover:bg-black/30'>
                  <RxCross1 />
                </Button>
                <Carousel setApi={setApi} className='md:mx-12'>
                  <CarouselContent className='flex items-end'>
                    {pictures.map(({ description, url }) => (
                      <CarouselItem className='px-8 sm:px-4  pl-12 sm:pl-14' key={description}>
                        <Image
                          alt={title}
                          className='overflow-hidden rounded-xl object-cover object-center w-full h-auto'
                          height='310'
                          src={`/img/galery/${url}`}
                          width='550'
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className='hidden md:flex  bg-black/10 hover:bg-black/30 border-none' />
                  <CarouselNext className='hidden md:flex  bg-black/10 hover:bg-black/30 border-none' />
                </Carousel>

                <div className='text-center px-8 sm:px-4'>
                  <p className='md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                    {pictures[current].description}
                  </p>
                  <p className='md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-foreground/75'>
                    {`${current + 1}/${count}`}
                  </p>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  )
}
