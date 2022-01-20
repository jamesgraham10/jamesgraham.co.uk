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
    tags: ["angular", "nodejs"],
    link: "https://www.pulselive.com/",
    year: "2018-20",
    ref: "pulse",
    type: "job",
  },
  {
    id: 3,
    title: "Many Digital",
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
    <div className="bg-gray-50">
      <div className="max-w-screen-2xl py-8 md:py-16 xl:py-32 px-4 md:px-8 mx-auto">
        <Title>Experience</Title>
        <p className="max-w-2xl mx-auto md:text-center text-gray-600 mt-4 mb-16">
          Much of my career experience centers building single-page apps with
          the latest and greatest JavaScript flavors, but I love pure CSS
          styling too.
        </p>
        <ItemList items={experience} />
      </div>
    </div>
  );
}
