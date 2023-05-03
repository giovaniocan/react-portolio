import Image, { StaticImageData } from 'next/image'

export type ProjectType = {
  title: string
  description: string
  techs: string[]
  image: StaticImageData
  github: string
}

interface Props {
  project: ProjectType
}

export function ProjectCard({ project }: Props) {
  return (
    <div className=" max-w-xs h-80 p-4 cursor-pointer bg-gray-200 border-solid border rounded border-gray-400  hover:border-green-500 dark:bg-zinc-800/75 dark:border-zinc-700 dark:hover:border-green-500 ">
      <Image className="object-cover" alt="" src={project.image} />
      <h3 className=" mt-4 text-lg dark:text-zinc-400">{project.title}</h3>
      <p className=" mt-1 text-sm dark:text-zinc-400">{project.description}</p>
    </div>
  )
}
