import React from "react";
import Title from "./Title";

export default function Layout({ children }) {
  return (
    <div className="text-black">
      <header>
        <nav></nav>
      </header>
      <main>{children}</main>
      <footer className="hero-bg py-8 border-t mt-8">
        <div className="max-w-screen-2xl text-sm text-accent mx-auto text-center font-medium">
          <p>© 2021, James Graham. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
