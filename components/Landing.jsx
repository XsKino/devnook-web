'use client'
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/BAZmNCmyUrA
 */
import Link from 'next/link'

export default function Landing() {
  return (
    <div className='flex flex-col min-h-screen bg-blue-50 dark:bg-blue-900'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <Link className='flex items-center justify-center' href='#'>
          <MountainIcon className='h-6 w-6' />
          <span className='sr-only'>Acme Inc</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-sm font-medium hover:underline underline-offset-4' href='#'>
            Eventos
          </Link>
          <Link className='text-sm font-medium hover:underline underline-offset-4' href='#'>
            Proyectos
          </Link>
          <Link className='text-sm font-medium hover:underline underline-offset-4' href='#'>
            Galería
          </Link>
          <Link className='text-sm font-medium hover:underline underline-offset-4' href='#'>
            Preguntas Frecuentes
          </Link>
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Bienvenido al Club de Programación de la universidad
                </h1>
                <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  Somos un club académico destinado a la programación y tecnología
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-blue-100 dark:bg-blue-800'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800'>
                  Eventos
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Próximos Eventos</h2>
                <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  Estos son los próximos eventos del club.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
              <img
                alt='Image'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
                height='310'
                src='/placeholder.svg'
                width='550'
              />
              <div className='flex flex-col justify-center space-y-4'>
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
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-blue-100 dark:bg-blue-800'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800'>
                  Proyectos
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Próximos Proyectos</h2>
                <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  Estos son los próximos proyectos del club.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
              <img
                alt='Image'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
                height='310'
                src='/placeholder.svg'
                width='550'
              />
              <div className='flex flex-col justify-center space-y-4'>
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
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800'>
                  Galería
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Salón de la fama</h2>
                <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  Mira nuestras fotos destacadas.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-1 lg:gap-12'>
              <div className='carousel'>
                <img
                  alt='Image'
                  className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
                  height='310'
                  src='/placeholder.svg'
                  width='550'
                />
                <img
                  alt='Image'
                  className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
                  height='310'
                  src='/placeholder.svg'
                  width='550'
                />
                <img
                  alt='Image'
                  className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
                  height='310'
                  src='/placeholder.svg'
                  width='550'
                />
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-blue-100 dark:bg-blue-800'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800'>
                  Preguntas Frecuentes
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Preguntas Frecuentes</h2>
                <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  Aquí encontrarás las respuestas a las preguntas más frecuentes.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-1 lg:gap-12'>
              <div className='flex flex-col justify-center space-y-4'>
                <ul className='grid gap-6'>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Pregunta 1</h3>
                      <p className='text-gray-500 dark:text-gray-400'>Respuesta a la pregunta 1.</p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Pregunta 2</h3>
                      <p className='text-gray-500 dark:text-gray-400'>Respuesta a la pregunta 2.</p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Pregunta 3</h3>
                      <p className='text-gray-500 dark:text-gray-400'>Respuesta a la pregunta 3.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
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

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  )
}