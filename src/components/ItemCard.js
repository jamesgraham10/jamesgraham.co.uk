import React from "react";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";

function ItemTitle({ link, title }) {
  return (
    <h2 className="font-bold text-xl relative">
      {link ? (
        <a className="hover:text-accent" href={link} target="_blank">
          {title} <ExternalLinkIcon />
        </a>
      ) : (
        title
      )}
    </h2>
  );
}

function ItemTags({ tags }) {
  return (
    <div className="flex">
      {tags.map((t) => (
        <span className="shadow-md bg-white text-sm rounded-xl py-1 px-2 mr-2">
          {t}
        </span>
      ))}
    </div>
  );
}

export default function ItemCard({ isFirst, item }) {
  return (
    <div
      className={`${
        isFirst
          ? "col-span-12 lg:col-span-4"
          : "col-span-12 md:col-span-6 lg:col-span-4"
      }`}
    >
      <ItemTitle title={item.title} link={item.link} />
      <p className="text-gray-600 text-sm">{item.desc}</p>

      <img
        className="w-full shadow object-cover rounded-xl my-2"
        alt={item.title}
        src={`${item.type}-${item.ref}.jpg`}
      />

      <div className="flex justify-between items-baseline">
        <ItemTags tags={item.tags} />
        <small className="font-medium">{item.year}</small>
      </div>
    </div>
  );
}
