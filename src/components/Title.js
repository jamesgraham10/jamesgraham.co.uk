import React from "react";

export default function Title({ children, textColor = "text-accent" }) {
  const classNames = [`text-3xl`, "font-bold", "text-center", textColor].join(
    " "
  );
  return <h1 className={classNames}>{children}</h1>;
}
