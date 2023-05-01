import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Presentation } from '@/components/Presentation'
import { About } from '@/components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=" w-11/12 max-w-6xl my-0 mx-auto py-8 ">
      <Header />
      <Presentation />
      <About />
    </div>
  )
}
