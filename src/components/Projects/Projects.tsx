import { ProjectCard } from './ProjectsCard'
import { CoffeDelivery, IgniteShop } from '../../utils/projects'

import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const containerVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -200 },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      id="projects"
      className=" w-full flex items-center flex-col "
    >
      <h1 className=" mt-24 text-4xl leading-10 font-medium maxw ">Projetos</h1>
      <div className=" mt-10 flex items-center justify-center gap-12 flex-wrap  ">
        <ProjectCard project={CoffeDelivery} />
        <ProjectCard project={IgniteShop} />
        <ProjectCard project={CoffeDelivery} />
        <ProjectCard project={IgniteShop} />
        <ProjectCard project={IgniteShop} />
        <ProjectCard project={IgniteShop} />
      </div>
    </motion.div>
  )
}
