import React from "react";

export default function ButtonLink({ children, href, target = "_blank" }) {
  const classNames = [
    "bg-white",
    "duration-200",
    "ease-in",
    "hover:bg-tertiary",
    "inline-flex",
    "items-center",
    "px-3",
    "py-2",
    "rounded-full",
    "shadow-md",
    "text-accent",
    "transition",
  ].join(" ");

  return (
    <a className={classNames} href={href} target={target}>
      {children}
    </a>
  );
}
