export default function LandingFAQ({ name, title, description, questions }) {
  return (
    <section id={name.toLowerCase()} className='py-12 px-8 md:py-24 lg:py-32 flex flex-col gap-8'>
      <div className='flex flex-col items-center justify-center space-y-4 text-center'>
        <div className='space-y-2'>
          <div className='inline-block rounded-lg  px-3 py-1 text-sm '>{name}</div>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>{title}</h2>
          <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
            {description}
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        {questions.map(({ title, answer }) => (
          <div className='flex flex-col gap-2' key={title}>
            <h3 className='text-xl font-bold'>{title}</h3>
            <p className='text-gray-500 dark:text-gray-400'>{answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
