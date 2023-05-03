import Image from 'next/image'

interface Props {
  src: string
}

export function Skill({ src }: Props) {
  return (
    <div className="p-6 cursor-pointer bg-gray-200 border-solid border rounded-sm border-gray-400  hover:border-green-500 dark:bg-zinc-800/75 dark:border-zinc-700 dark:hover:border-green-500 ">
      <Image src={src} width={80} height={80} alt="" />
    </div>
  )
}
