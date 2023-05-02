import { Header } from '@/components/Header'
import { Presentation } from '@/components/Presentation'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'

export default function Home() {
  return (
    <div className=" w-11/12 max-w-6xl my-0 mx-auto py-8 ">
      <Header />
      <Presentation />
      <About />
      <Projects />
    </div>
  )
}
