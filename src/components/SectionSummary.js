import React from "react";

export default function SectionSummary({ text }) {
  const classNames = [
    "max-w-2xl",
    "mb-16",
    "md:text-center",
    "mt-4",
    "mx-auto",
    "text-gray-600",
  ].join(" ");

  return <p className={classNames}>{text}</p>;
}
