interface MenuNavProps {
  nav: boolean
  closeNav: () => void
}

export function MenuNav({ nav, closeNav }: MenuNavProps) {
  return (
    <nav
      className={`h-screen overflow-y-hidden overflow-x-hidden   w-screen fixed top-0 right-0 flex flex-col justify-center gap-16 items-center  md:hidden  bg-green-500 text-gray-600 z-40  text-xl duration-1000
    ${nav ? 'right-[0px]' : 'right-[-100vw]'}`}
    >
      <a href="#about" onClick={closeNav} className="text-white text-3xl">
        Sobre mim
      </a>
      <a href="#projects" onClick={closeNav} className="text-white text-3xl">
        Projetos
      </a>
      <a href="#skills" onClick={closeNav} className="text-white text-3xl">
        Skills
      </a>
    </nav>
  )
}
