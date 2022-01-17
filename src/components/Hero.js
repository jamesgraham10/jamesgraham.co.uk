import React from "react";

export default function Hero() {
  return (
    <div className="py-20 md:py-32 bg-milkBlue">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between mb-6">
          <div className="mr-4">
            <p className="font-medium">Hello! I'm James 👋</p>
            <h1 className="text-3xl font-bold mb-4">
              I'm a JavaScript developer based in London.
            </h1>
            <p className="">
              <strong>4+ years</strong> experience with React, Node.js and
              various other tasty{" "}
              <span
                className="py-.5 px-1 font-bold"
                style={{
                  backgroundColor: "#f7df1e",
                }}
              >
                JS
              </span>{" "}
              flavors. In my own time I like to run, cook, share food with
              friends and travel. At some point I want to cycle around the
              world!
            </p>
          </div>
          <img
            className="rounded-full shadow-md w-48 h-48 ml-4 hidden md:block"
            src="https://placekitten.com/400/400"
          />
        </div>
        <a
          className="shadow-md rounded-full text-white bg-black p-2"
          href="https://codesandbox.com"
          target="_blank"
        >
          Open this site in Code Sandbox
        </a>
      </div>
    </div>
  );
}
