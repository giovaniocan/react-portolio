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
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          level={5}
          title="HTML"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          level={5}
          title="CSS 3"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          level={5}
          title="Tailwind"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          level={5}
          title="JavaScript"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          level={5}
          title="React"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          level={5}
          title="TypeScript"
        />
        <Skill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
          level={5}
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
          level={5}
          title="Java"
        />
      </div>
    </div>
  )
}
