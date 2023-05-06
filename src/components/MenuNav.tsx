interface MenuNavProps {
  nav: boolean
}

export function MenuNav({ nav }: MenuNavProps) {
  return (
    <nav
      className={`h-[100vh] fixed top-[0px] right-0 flex flex-col justify-center gap-16 items-center w-full md:hidden py-10 bg-green-500 text-gray-600 z-40 duration-500 text-xl 
    ${nav ? 'right-[0px]' : 'right-[-100vw]'}`}
    >
      <a href="#about" className="border-b-2 border-black pb-1">
        Sobre nós
      </a>
      <a href="#courses" className="border-b-2 border-black pb-1">
        Cursos
      </a>
      <a href="#depositions" className="border-b-2 border-black pb-1">
        Depoimentos
      </a>
      <a href="#contact" className="border-b-2 border-black pb-1">
        Contato
      </a>
      <a href="#faq" className="border-b-2 border-black pb-1">
        FAQ
      </a>
    </nav>
  )
}
