import Image from 'next/image'
import { Star } from 'phosphor-react'

interface Props {
  src: string
  title: string
  level: 1 | 2 | 3 | 4 | 5
}

export function Skill({ src, title, level }: Props) {
  const starsCollored = level as number
  const starsEmpty = 5 - starsCollored

  return (
    <div className=" group w-36 py-8 flex items-center justify-center bg-gray-200 border-solid border rounded-sm border-gray-400  dark:bg-zinc-800/75 dark:border-zinc-700  ">
      <Image src={src} width={80} height={80} alt="" />
      <div className="absolute hidden h-20 mt-20 w-[calc(144px-2px)] mb-4 bg-zinc-100 pl-4 justify-center flex-col group-hover:flex group-hover:visible dark:bg-zinc-900">
        <h3 className=" text-zinc-400/70 text-lg font-bold ">{title}</h3>
        <div className="flex">
          {Array.from(Array(starsCollored), (e, i) => (
            <Star size={15} weight="fill" key={i} color="#00DF5E" />
          ))}
          {Array.from(Array(starsEmpty), (e, i) => (
            <Star size={15} weight="fill" key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
