import Image from 'next/image'
import { Star } from 'phosphor-react'

interface Props {
  src: string
  title: string
  level: 1 | 2 | 3 | 4 | 5
}

export function Skill({ src, title, level }: Props) {
  return (
    <div className=" group w-32 py-6 flex items-center justify-center bg-gray-200 border-solid border rounded-sm border-gray-400  dark:bg-zinc-800/75 dark:border-zinc-700  ">
      <Image src={src} width={80} height={80} alt="" />
      <div className="absolute hidden h-16 mt-16 w-32 bg-black  items-center justify-center flex-col group-hover:flex group-hover:visible ">
        <h3 className=" text-zinc-400/70 text-lg font-bold ">{title}</h3>
        <div className="flex">
          <Star weight="fill" color="#00DF5E" />
        </div>
      </div>
    </div>
  )
}
