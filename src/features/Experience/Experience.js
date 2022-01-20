import React from "react";
import Section from "../../components/Section";
import ItemList from "../../components/ItemList";

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
    <Section
      backgroundColor="bg-gray-50"
      title="Experience"
      summary="Much of my career experience centers building single-page apps with
    the latest and greatest JavaScript flavors, but I love pure CSS
    styling too."
    >
      <ItemList items={experience} />
    </Section>
  );
}
