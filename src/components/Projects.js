import React from "react";

import Title from "./Title";

const projects = [
  {
    id: 1,
    title: "Stories To Tell",
    desc: "Remember, write and share your life story",
    tags: ["react", "graphql"],
    link: "https://storiestotell.app",
    year: 2021,
  },
  {
    id: 2,
    title: "Football Planner",
    desc: "Scheduler to watch matches on TV",
    tags: ["vue", "laravel"],
    year: 2017,
  },
  {
    id: 3,
    title: "Sherpa",
    tags: ["angular", "mongodb"],
    desc: "Chrome app - a himilayan inspired todo list",
    year: 2015,
  },
];

export default function Projects() {
  return (
    <div className="max-w-screen-2xl py-8 md:py-16 px-4 md:px-8 mx-auto">
      <Title>Projects</Title>
      <p className="max-w-2xl mx-auto md:text-center text-gray-600 mt-4 mb-8">
        I started learning to code in 2015 to create Chrome apps for my
        Chromebook. It took me a year to realise this fun new hobby was actually
        a valid career path. I got my first dev job in 2016 but I’ve never lost
        the love of creating my own projects.
      </p>
      <div className="grid grid-cols-12 gap-8">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className={`${
              i === 0
                ? "col-span-12 lg:col-span-4"
                : "col-span-12 md:col-span-6 lg:col-span-4"
            }`}
          >
            <div className="">
              <h2 className="font-bold text-xl relative">
                {project.link ? (
                  <a
                    className=" hover:text-pureBlack"
                    href={project.link}
                    target="_blank"
                  >
                    {project.title}{" "}
                    <svg
                      className="w-3 absolute top-1 right-0"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M432 320h-32v0c-8.84 0-16 7.16-16 16v112H64V128h144v0c8.83 0 16-7.17 16-16V80v0c0-8.84-7.17-16-16-16H48v0C21.49 64 0 85.49 0 112v352 0c0 26.5 21.49 48 48 48h352v0c26.5 0 48-21.5 48-48V336v0c0-8.84-7.17-16-16-16ZM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37v0c-9.39 9.35-9.42 24.55-.06 33.94 .01.01.03.03.05.05l22.67 22.63v0c9.35 9.38 24.55 9.41 33.94.05 .01-.02.03-.04.05-.06L435.26 133.3l35.72 35.68c15 15 41 4.5 41-17v-128 0c0-13.26-10.75-24-24-24Z"
                      />
                    </svg>
                  </a>
                ) : (
                  project.title
                )}
              </h2>
              <p className="text-gray-600 text-sm">{project.desc}</p>
              <img
                className="w-full h-64 xl:h-72 object-cover rounded my-2"
                src={`https://placekitten.com/500/500`}
              />
              <div className="flex justify-between items-baseline">
                <div className="flex">
                  {project.tags.map((t) => (
                    <div className="shadow-md text-sm rounded py-1 px-2 mr-2">
                      {t}
                    </div>
                  ))}
                </div>
                <small className="font-medium">{project.year}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
