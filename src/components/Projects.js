import React from "react";

import Title from "./Title";
import ItemList from "./ItemList";

const projects = [
  {
    id: 1,
    title: "Stories To Tell",
    desc: "Remember, write and share your life story",
    tags: ["react", "graphql"],
    link: "https://storiestotell.app",
    year: "2021",
    ref: "stt",
    type: "project",
  },
  {
    id: 2,
    title: "Football Planner",
    desc: "Scheduler to watch matches on TV",
    tags: ["vue", "laravel"],
    year: "2017",
    ref: "fp",
    type: "project",
  },
  {
    id: 3,
    title: "Sherpa",
    tags: ["angular", "mongodb"],
    desc: "Chrome app - a himilayan inspired todo list",
    year: "2015",
    ref: "sherpa",
    type: "project",
  },
];

export default function Projects() {
  return (
    <div className="max-w-screen-2xl py-8 md:py-16 px-4 md:px-8 mx-auto">
      <Title>Projects</Title>
      <p className="max-w-2xl mx-auto md:text-center text-gray-600 mt-4 mb-16">
        I started learning to code in 2015 to create Chrome apps for my
        Chromebook. It took me a year to realise this fun new hobby was actually
        a valid career path. I got my first dev job in 2016 but I’ve never lost
        the love of creating my own projects.
      </p>
      <ItemList items={projects} />
    </div>
  );
}
