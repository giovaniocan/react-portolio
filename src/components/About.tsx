import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'

export function About() {
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
      className=" w-full flex flex-col items-center justify-center "
    >
      <h1 className=" mt-36 text-4xl leading-10 font-medium maxw ">
        Sobre mim
      </h1>
      <p className=" mt-10 px-6  text-center text-base lg:px-36 md:text-lg leading-8   dark:text-zinc-400  ">
        Sou um desenvolvedor júnior apaixonado por tecnologia, com mais de 4
        anos de experiência em programação. Acredito que a programação tem o
        poder de transformar a vida das pessoas e solucionar problemas reais.
        Busco aprendizado constante e estou entusiasmado em contribuir em
        projetos desafiadores, aprimorando minhas habilidades e impulsionando o
        progresso da equipe
      </p>
    </motion.div>
  )
}
