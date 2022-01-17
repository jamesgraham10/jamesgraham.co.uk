import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
  return (
    <div className="py-20 md:py-32 hero-bg">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <p className="font-medium text-accent mb-2">Hello! I'm James 👋</p>
            <h1 className="text-3xl font-bold mb-4 text-accent">
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
          <div>
            <div className="w-60 h-60 ml-4 hidden md:block overflow-hidden relative">
              <StaticImage
                layout="fullWidth"
                placeholder="none"
                aspectRatio={1}
                src="../images/james.png"
              />
            </div>
          </div>
        </div>
        <a
          className="shadow-md rounded-full text-accent bg-tertiary py-2 px-3 inline-flex items-center"
          href="https://codesandbox.com"
          target="_blank"
        >
          <svg
            className="mr-2"
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.54 18C8.59562 17.9822 8.64872 17.9573 8.698 17.926L14.872 14.236C15.606 13.798 16 13.351 16 12.152V5.708C16 5.46 15.984 5.261 15.937 5.079L8.54 9.513V18ZM0.0629997 5.079L7.46 9.513V18C7.40629 17.9837 7.35562 17.9587 7.31 17.926L1.128 14.236C0.402 13.798 0 13.351 0 12.152V5.708C0 5.46 0.0159997 5.261 0.0629997 5.079V5.079ZM8.004 0C8.447 0 8.904 0.143 9.363 0.406L9.431 0.446L14.998 3.772C15.153 3.86 15.282 3.949 15.392 4.054L15.432 4.094L8.004 8.52L0.568 4.095C0.678 3.986 0.801 3.897 0.946 3.809L1.009 3.772L5.079 1.33H5.081L6.569 0.447C7.003 0.185 7.437 0.0320002 7.865 0.00400019L7.936 0.000999928L8.004 0Z"
              fill="#0E349C"
            />
          </svg>
          Open this site in Code Sandbox
        </a>
      </div>
    </div>
  );
}
