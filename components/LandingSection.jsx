import React from 'react'
import Image from 'next/image'

export default function LandingSection({ name = '', title, description, children, imageUrl, imageAlt }) {
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
  )
}
