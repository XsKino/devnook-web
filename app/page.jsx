/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import Link from 'next/link'
import Image from 'next/image'
import { clubName, clubDescription, galeryPictures } from '@/data/info'
import Section from '@/components/LandingSection'
import Galery from '@/components/LandingGalery'
import FAQ from '@/components/LandingFAQ'

const sectionProps = {
  events: {
    name: 'Eventos',
    title: 'Eventos',
    description: 'Próximos eventos.',
    imageUrl: '/placeholder.svg',
    imageAlt: 'Placeholdera1t'
  },
  projects: {
    name: 'Proyectos',
    title: 'proyectos',
    description: 'Proyectos creados por el club.',
    imageUrl: '/placeholder.svg',
    imageAlt: 'Placeholder2',
    hallOfFame: [
      {
        title: 'Proyecto 1',
        description: 'Descripción del proyecto 1.',
        imageUrl: '/placeholder.svg'
      },
      {
        title: 'Proyecto 2',
        description: 'Descripción del proyecto 2.',
        imageUrl: '/placeholder.svg'
      },
      {
        title: 'Proyecto 3',
        description: 'Descripción del proyecto 3.',
        imageUrl: '/placeholder.svg'
      },
      {
        title: 'Proyecto 4',
        description: 'Descripción del proyecto 4.',
        imageUrl: '/placeholder.svg'
      }
    ]
  },
  galery: {
    name: 'Galeria',
    title: 'Galería',
    description: 'Mira nuestras fotos destacadas.',

    pictures: galeryPictures
  },
  faq: {
    name: 'FAQ',
    title: 'Preguntas Frecuentes',
    description: 'Aquí encontrarás las respuestas a las preguntas más frecuentes.',
    questions: [
      {
        title: 'Pregunta 1',
        answer: 'Respuesta a la pregunta 1.'
      },
      {
        title: 'Pregunta 2',
        answer: 'Respuesta a la pregunta 2.'
      },
      {
        title: 'Pregunta 3',
        answer: 'Respuesta a la pregunta 3.'
      },
      {
        title: 'Pregunta 4',
        answer: 'Respuesta a la pregunta 4.'
      }
    ]
  }
}

export default function Home() {
  return (
    <div className='flex flex-col'>
      <main className='flex-1'>
        <header id='header' className='min-h-[100svh] py-12 md:py-24 lg:py-32 grid place-items-center'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>{clubName}</h1>
              <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/ dark:text-gray-400'>
                {clubDescription}
              </p>
            </div>
          </div>
        </header>

        <Section {...sectionProps.events}>
          <ul className='grid gap-6'>
            <li>
              <div className='grid gap-1'>
                <h3 className='text-xl font-bold'>Evento 1</h3>
                <p className='text-gray-500 dark:text-gray-400'>Descripción del evento 1.</p>
              </div>
            </li>
            <li>
              <div className='grid gap-1'>
                <h3 className='text-xl font-bold'>Evento 2</h3>
                <p className='text-gray-500 dark:text-gray-400'>Descripción del evento 2.</p>
              </div>
            </li>
          </ul>
        </Section>

        <Section {...sectionProps.projects}>
          <ul className='grid gap-6'>
            <li>
              <div className='grid gap-1'>
                <h3 className='text-xl font-bold'>Proyecto 1</h3>
                <p className='text-gray-500 dark:text-gray-400'>Descripción del proyecto 1.</p>
              </div>
            </li>
            <li>
              <div className='grid gap-1'>
                <h3 className='text-xl font-bold'>Proyecto 2</h3>
                <p className='text-gray-500 dark:text-gray-400'>Descripción del proyecto 2.</p>
              </div>
            </li>
          </ul>
        </Section>

        <Galery {...sectionProps.galery} />

        <FAQ {...sectionProps.faq} />
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>© 2024 Acme Inc. All rights reserved.</p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Terms of Service
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
