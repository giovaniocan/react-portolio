import Image, { StaticImageData } from 'next/image'

import { useState } from 'react'

import { ProjectModal } from './ProjectModal'

export type ProjectType = {
  title: string
  description: string
  techs: string[]
  image: StaticImageData
  github?: string
  deploy?: string
}

interface Props {
  project: ProjectType
}

export function ProjectCard({ project }: Props) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  function handleOpenContactModal() {
    setIsContactModalOpen(true)
  }

  function handleCloseContactModal() {
    setIsContactModalOpen(false)
  }
  return (
    <>
      <button
        onClick={handleOpenContactModal}
        className=" max-w-xs h-80 p-4 cursor-pointer bg-gray-200 border-solid border rounded border-gray-400  hover:border-green-500 dark:bg-zinc-800/75 dark:border-zinc-700 dark:hover:border-green-500 "
      >
        <Image className="object-cover" alt="" src={project.image} />
        <h3 className=" mt-4 text-lg dark:text-zinc-400">{project.title}</h3>
        <p className=" mt-1 text-sm dark:text-zinc-400">
          {project.description}
        </p>
      </button>
      <ProjectModal
        isOpen={isContactModalOpen}
        project={project}
        onRequestClose={handleCloseContactModal}
      />
    </>
  )
}
