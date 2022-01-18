import React from "react";

import Title from "./Title";
import ItemList from "./ItemList";

const experience = [
  {
    id: 1,
    title: "LuxDeco",
    desc: "Senior Frontend Developer",
    tags: ["react", "rails", "shopify"],
    link: "https://www.luxdeco.com/",
    year: "2020-21",
    ref: "lux",
    type: "job",
  },
  {
    id: 2,
    title: "Pulselive",
    desc: "Frontend Developer",
    tags: ["angular"],
    link: "https://www.pulselive.com/",
    year: "2018-20",
    ref: "pulse",
    type: "job",
  },
  {
    id: 3,
    title: "Many Ltd",
    tags: ["vue", "express", "nodejs"],
    desc: "Web Developer",
    link: "https://www.many.co.uk/",
    year: "2016-17",
    ref: "many",
    type: "job",
  },
];

export default function Experience() {
  return (
    <div className="max-w-screen-2xl py-8 md:py-16 px-4 md:px-8 mx-auto">
      <Title>Experience</Title>
      <p className="max-w-2xl mx-auto md:text-center text-gray-600 mt-4 mb-16">
        Much of my experience centers around building fast, responsive,
        data-driven single page apps in the latest and greatest JavaScript
        frameworks. But I also have a host of experience, from hybrid mobile
        apps all the way to WordPress.
      </p>
      <ItemList items={experience} />
    </div>
  );
}
