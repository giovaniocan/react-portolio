import { Skill } from './Skill'

export function Skills() {
  return (
    <div
      id="skills"
      className=" w-full flex flex-col items-center justify-center "
    >
      <h1 className=" mt-24 text-4xl leading-10 font-medium maxw ">
        Minhas Skills
      </h1>
      <h3 className=" text-zinc-400 text-xl mt-3">
        Passe o mouse ou clique na skill para ver mais informações
      </h3>

      <div className=" mt-10 flex justify-center gap-12 flex-wrap lg:max-w-4xl  ">
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" />
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
      </div>
    </div>
  )
}
