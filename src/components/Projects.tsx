import { ProjectCard } from './ProjectsCard'
import { CoffeDelivery, IgniteShop } from '../utils/projects'

export function Projects() {
  return (
    <div id="projects" className=" w-full flex items-center flex-col ">
      <h1 className=" mt-24 text-4xl leading-10 font-medium maxw ">Projetos</h1>
      <div className=" mt-10 flex items-center justify-center gap-12 flex-wrap  ">
        <ProjectCard project={CoffeDelivery} />
        <ProjectCard project={IgniteShop} />
        <ProjectCard project={CoffeDelivery} />
        <ProjectCard project={IgniteShop} />
        <ProjectCard project={IgniteShop} />
        <ProjectCard project={IgniteShop} />
      </div>
    </div>
  )
}
