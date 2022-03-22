import React from "react";

export default function HeroIntro() {
  return (
    <>
      <p className="font-medium text-accent mb-2">Hello! I'm James 👋</p>
      <h1 className="text-3xl font-bold mb-4 text-accent">
        I'm a JavaScript developer based in London.
      </h1>
      <p className="max-w-xl">
        <strong>4+ years</strong> experience with React, Node.js and various
        other{" "}
        <span
          className="py-.5 px-1 font-bold"
          style={{
            backgroundColor: "#f7df1e",
          }}
        >
          JS
        </span>{" "}
        flavors. In my own time I like to run, cook, share food with friends and
        travel.
      </p>
    </>
  );
}
