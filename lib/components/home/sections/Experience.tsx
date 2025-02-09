'use client'

import { bungeeInline } from '@lib/fonts'
import { ComponentProps, FC, Fragment, useState } from 'react'
import { experiences } from '@lib/objects'

const Experience: FC<ComponentProps<typeof Fragment>> = (props) => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0])

  return (
    <>
      <h2 className={`${bungeeInline.className} text-secondary text-5xl`}>
        Experiencia
      </h2>
      <section className="flex flex-row gap-8">
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
                <div className="border-l-[4px] rounded-md border-primary h-full w-fit absolute scale-110"></div>
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

        <article className="p-4 xl:max-w-[600px] xl:min-h-[300px]">
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
    </>
  )
}

export default Experience
