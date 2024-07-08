'use client'

import { bebasNeue } from '@lib/fonts'
import { ComponentProps, FC, useState } from 'react'
import { experiences } from '@lib/objects'

const ExperienceSection: FC<ComponentProps<'section'>> = (props) => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0])

  return (
    <section id="experience" {...props}>
      <div className="xl:min-h-[500px]">
        <h2 className={`${bebasNeue.className} text-5xl`}>Experience</h2>
        <section className="mt-16 flex flex-row gap-8">
          <aside className="flex flex-col">
            {experiences.map((experience, index) => (
              <button
                onClick={() => setSelectedExperience(experience)}
                key={index}
                className={`flex flex-row relative ${
                  selectedExperience.name === experience.name
                    ? ''
                    : 'border-l-[4px]'
                }`}
              >
                {selectedExperience.name === experience.name && (
                  <div className="z-50 border-l-[4px] rounded-md border-primary h-full w-fit absolute scale-110"></div>
                )}
                <span
                  className={`p-4 w-full hover:bg-ternary hover:text-primary ${
                    selectedExperience.name === experience.name
                      ? 'text-primary px-5 bg-ternary'
                      : ''
                  }`}
                >
                  {experience.name}
                </span>
              </button>
            ))}
            <div className="border-l-[4px] w-fit absolute border-red-500"></div>
          </aside>

          <article className="p-4">
            <header>
              <h3 className="text-2xl">{selectedExperience.title}</h3>
              <span className="text-sm">{selectedExperience.date}</span>
            </header>
            <ul className="p-4">
              {selectedExperience.description.map((desc, index) => (
                <li key={index} className="list-disc">
                  {desc}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </section>
  )
}

export default ExperienceSection
