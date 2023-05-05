import { ArrowUp } from 'phosphor-react'
import ScrollToTop from 'react-scroll-up'

export function ReturTOHeader() {
  return (
    <ScrollToTop showUnder={150} duration={500}>
      <a className=" w-12 h-12 rounded-full  bg-green-500 flex items-center justify-center   ">
        <ArrowUp size={28} color="#FFFFFF" weight="bold" />
      </a>
    </ScrollToTop>
  )
}
