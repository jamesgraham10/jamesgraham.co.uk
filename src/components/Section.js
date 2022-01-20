import React from "react";

import SectionTitle from "./SectionTitle";
import SectionSummary from "./SectionSummary";

export default function Section({
  backgroundColor = "bg-white",
  title = null,
  summary = null,
  children,
}) {
  return (
    <section className={backgroundColor}>
      <div className="max-w-screen-2xl py-8 md:py-16 xl:py-32 px-4 md:px-8 mx-auto">
        {title && <SectionTitle text={title} />}
        {summary && <SectionSummary text={summary} />}
        {children}
      </div>
    </section>
  );
}
