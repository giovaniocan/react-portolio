import { ProjectCard } from './ProjectsCard'

export function Projects() {
  return (
    <div id="projects" className=" w-full flex items-center flex-col ">
      <h1 className=" mt-24 text-4xl leading-10 font-medium maxw ">Projetos</h1>
      <div className=" mt-10 flex items-center justify-center gap-12 flex-wrap ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}
