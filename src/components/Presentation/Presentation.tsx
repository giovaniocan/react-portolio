import Image from 'next/image'
import { useState } from 'react'

import { ContactModal } from './ContactModal'

export function Presentation() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  function handleOpenContactModal() {
    setIsContactModalOpen(true)
  }

  function handleCloseContactModal() {
    setIsContactModalOpen(false)
  }
  return (
    <div
      id="about"
      className=" mt-40 flex flex-col-reverse items-center lg:flex-row justify-between "
    >
      <div className=" max-w-xs">
        <h1 className=" text-4xl leading-10 font-medium maxw ">
          Olá, eu sou o Giovani Ocan :)
        </h1>
        <h2 className=" mt-6 text-lg font-normal dark:text-zinc-400 ">
          Desenvolvedor Frontend Junior
        </h2>
        <div className=" w-full mt-8 flex items-center justify-stretch gap-3 ">
          <button className=" border border-zinc-400 dark:border-zinc-800 w-full text-sm p-3  ">
            Download CV
          </button>
          <button
            onClick={handleOpenContactModal}
            className=" animate-pulse border border-zinc-400 dark:border-zinc-800 w-full text-sm p-3 bg-green-500 text-black "
          >
            Entrar em contato
          </button>
        </div>
      </div>
      <Image src="/boy.svg" alt="" width={300} height={255} />
      <ContactModal
        isOpen={isContactModalOpen}
        onRequestClose={handleCloseContactModal}
      />
    </div>
  )
}
