import React from "react";
import Section from "../../components/Section";
import ItemList from "../../components/ItemList";

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
    <Section
      title="Projects"
      summary="I started coding to create Chrome apps for my Chromebook. Two years
    later I got my first dev job but I’ve never lost the love of creating
    my own projects. Here's a sprinkling."
    >
      <ItemList items={projects} />
    </Section>
  );
}
