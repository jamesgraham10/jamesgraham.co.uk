import React from "react";

import ButtonLink from "../../components/ButtonLink";
import CodeSandboxIcon from "../../components/icons/CodeSandboxIcon";

import HeroIntro from "./HeroIntro";

export default function Hero() {
  return (
    <section className="py-20 md:py-32 bg-topography">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <HeroIntro />
          </div>
        </div>
        <ButtonLink href="https://codesandbox.io/s/ghps6">
          <CodeSandboxIcon />
          Open this site in Code Sandbox
        </ButtonLink>
      </div>
    </section>
  );
}
