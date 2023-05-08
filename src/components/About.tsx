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
      <p className=" mt-10 px-6  text-center text-base lg:px-36 text-lg leading-8   dark:text-zinc-400  ">
        Meu nome é Giovani Apolinario Ocan, tenho 18 anos e estudo programação
        há mais de 4 anos. Atualmente estou focado em aprender cada vez mais
        sobre o Front End e suas tecnologias, como o React e Nextjs utilizando
        Typescript. Agora que terminei o ensino médio integrado ao curso de
        técnico em informática pretendo aprimorar minhas skills e conhecimentos
        para poder entrar no mercado de trabalho como dev.
      </p>
    </motion.div>
  )
}
