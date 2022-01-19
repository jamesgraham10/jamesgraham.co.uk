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
    <div>
      <div className="max-w-screen-2xl py-8 md:py-16 xl:py-32 px-4 md:px-8 mx-auto">
        <Title>Projects</Title>
        <p className="max-w-2xl mx-auto md:text-center mt-4 mb-16">
          I started coding to create Chrome apps for my Chromebook. Two years
          later I got my first dev job but I’ve never lost the love of creating
          my own projects. Here's a sprinkling.
        </p>
        <ItemList items={projects} />
      </div>
    </div>
  );
}
