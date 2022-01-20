import React from "react";

import ButtonLink from "../../components/ButtonLink";
import CodeSandboxIcon from "../../components/icons/CodeSandboxIcon";

import HeroIntro from "./HeroIntro";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="py-20 md:py-32 bg-topography">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <HeroIntro />
          </div>
          <HeroImage />
        </div>
        <ButtonLink href="https://codesandbox.com">
          <CodeSandboxIcon />
          Open this site in Code Sandbox
        </ButtonLink>
      </div>
    </section>
  );
}