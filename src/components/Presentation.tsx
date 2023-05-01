import Image from 'next/image'

export function Presentation() {
  return (
    <div className=" mt-40 flex flex-col-reverse items-center lg:flex-row justify-between ">
      <div className=" max-w-xs">
        <h1 className=" text-4xl leading-10 font-medium maxw ">
          Olá, eu sou o Giovani Ocan :)
        </h1>
        <h2 className=" mt-6 text-lg font-normal dark:text-zinc-400 ">
          Desenvolvedor Frontend Junior
        </h2>
        <div className=" w-full mt-8 flex items-center justify-stretch gap-3 ">
          <button className=" border border-zinc-400 dark:border-zinc-800 w-full text-sm p-3 bg-green-500 text-black ">
            Download CV
          </button>
          <button className=" border border-zinc-400 dark:border-zinc-800 w-full text-sm p-3 ">
            Entrar em contato
          </button>
        </div>
      </div>
      <Image src="/boy.svg" alt="" width={300} height={255} />
    </div>
  )
}
