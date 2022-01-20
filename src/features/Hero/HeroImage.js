import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function HeroImage() {
  return (
    <div>
      <div className="w-60 h-60 ml-4 hidden md:block overflow-hidden relative">
        <StaticImage
          layout="fullWidth"
          placeholder="none"
          aspectRatio={1}
          alt="James Graham"
          src="../../images/james.png"
        />
      </div>
    </div>
  );
}
