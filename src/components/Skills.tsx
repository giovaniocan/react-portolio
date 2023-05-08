import { Skill } from './Skill'
import { skills } from '../utils/skills'

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
        {skills.map((skill) => {
          return (
            <Skill
              key={skill.title}
              level={skill.level}
              title={skill.title}
              src={skill.src}
            />
          )
        })}
      </div>
    </div>
  )
}
