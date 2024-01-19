import React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

export default function Galery({ name = '', title, description, hallOfFame, pictures }) {
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
        {pictures.map(({ description, imageUrl }) => (
          <div key={description} className='flex flex-col gap-2'>
            <Image
              alt={description}
              className='object-cover object-center rounded-xl border w-full h-auto'
              width={200}
              height={130}
              src={imageUrl}
            />
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
