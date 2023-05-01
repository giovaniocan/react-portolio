'use client'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'phosphor-react'
import { useEffect, useState } from 'react'

export function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className=" w-full flex justify-between items-center">
      <h2 className=" text-3xl font-semibold ">Portifólio</h2>
      <div className=" flex gap-12 ml-auto ">
        <div className=" hidden lg:flex gap-12 visible ">
          <a href="" className=" text-lg ">
            Sobre mim
          </a>
          <a href="" className=" text-lg ">
            Projetos
          </a>
          <a href="" className=" text-lg ">
            Serviços
          </a>
          <a href="" className=" text-lg ">
            Minhas skills
          </a>
        </div>
        <button 
          onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
          }}
        >
          {resolvedTheme === 'dark' ? (
            <Sun size={30} color="#00DF5E" />
          ) : (
            <Moon size={30} color="#00DF5E" />
          )}
        </button>
        </div>
      
      <div />
    </div>
  )
}
