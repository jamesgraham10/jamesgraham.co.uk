import React from "react";

export default function SectionTitle({ text }) {
  const classNames = [
    `text-3xl`,
    "font-bold",
    "text-accent",
    "text-center",
  ].join(" ");
  return <h1 className={classNames}>{text}</h1>;
}
