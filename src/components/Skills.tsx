import { Skill } from './Skill'

export function Skills() {
  return (
    <div
      id="skills"
      className=" w-full flex flex-col items-center justify-center "
    >
      <h1 className=" mt-36 text-4xl leading-10 font-medium ">Minhas Skills</h1>
      <h3 className="  text-xl mt-3 text-center dark:text-zinc-400 ">
        Passe o mouse na skill para ver mais informações
      </h3>

      <div className=" mt-10 flex justify-center gap-12 flex-wrap lg:max-w-5xl  ">
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          level={5}
          title="HTML"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          level={4}
          title="CSS 3"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          level={4}
          title="Tailwind"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          level={5}
          title="JavaScript"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          level={4}
          title="React"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          level={5}
          title="TypeScript"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
          level={4}
          title="Next.js"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          level={5}
          title="GitHub"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          level={5}
          title="Git"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          level={4}
          title="Java"
        />
      </div>
    </div>
  )
}
