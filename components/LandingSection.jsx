import React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

export default function LandingSection({
  name = '',
  title,
  description,
  children,
  imageUrl,
  imageAlt,
  hallOfFame = []
}) {
  return (
    <div className='flex flex-col gap-10 py-12 px-8 md:py-24 lg:py-32'>
      <section id={name.toLowerCase()}>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>{title}</h2>
            <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              {description}
            </p>
          </div>
        </div>
        <div className='mx-auto flex flex-col md:flex-row gap-6 py-12 lg:gap-12'>
          <Image
            alt={imageAlt}
            className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last flex-1 border'
            height='310'
            src={imageUrl}
            width='550'
          />
          <div className='flex flex-col justify-center space-y-4 flex-1'>{children}</div>
        </div>
      </section>
      {hallOfFame.length > 0 && (
        <section>
          <h3 className='text-2xl font-bold tracking-tighter sm:text-3xl text-center'>Salón de la fama</h3>

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
        </section>
      )}
    </div>
  )
}
