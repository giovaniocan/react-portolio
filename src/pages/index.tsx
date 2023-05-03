import { Header } from '@/components/Header'
import { Presentation } from '@/components/Presentation'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portifólio</title>
      </Head>
      <div className=" w-11/12 max-w-6xl my-0 mx-auto py-8 ">
        <Header />
        <Presentation />
        <About />
        <Projects />
      </div>
    </>
  )
}
