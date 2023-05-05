import Modal from 'react-modal'
import Image, { StaticImageData } from 'next/image'

export type ProjectType = {
  title: string
  description: string
  techs: string[]
  image: StaticImageData
  github: string
}

interface ContactModalProps {
  isOpen: boolean
  onRequestClose: () => void
  project: ProjectType
}

export function ProjectModal({
  isOpen,
  onRequestClose,
  project,
}: ContactModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal de exemplo"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black/80 "
      className=" p-6 bg-white border-2  border-green-500 rounded-lg  mx-6 w-full lg:w-5/12 lg:p-10 dark:bg-zinc-900 dark:border"
    >
      <div className=" flex flex-col gap-4 ">
        <header className=" flex flex-col items-center justify-center gap-6 ">
          <h1 className=" text-4xl font-medium ">{project.title}</h1>
          <Image src={project.image} width={500} height={250} alt="" />
        </header>
        <span className=" mt-2 text-xl text-zinc-400 ">
          {project.description}
        </span>
        <div>
          <h2 className=" text-3xl font-medium  ">Tecnologias</h2>
          <span className=" mt-6 text-xl text-zinc-400 ">{project.techs}</span>
        </div>
      </div>
    </Modal>
  )
}
