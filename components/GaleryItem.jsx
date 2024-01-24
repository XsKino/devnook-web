'use client'
import Image from 'next/image'

import React from 'react'

export default function GaleryItem({ url, description, onOpen, setCurrent, index }) {
  const handleClick = () => {
    setCurrent(index)
    onOpen()
  }
  return (
    <>
      <button onClick={handleClick} key={description}>
        <Image
          alt={description}
          className='object-cover object-center rounded-md shadow-xl shadow-black/20 w-full h-auto'
          width={200}
          height={130}
          src={`/img/galery/${url}`}
        />
      </button>
    </>
  )
}
