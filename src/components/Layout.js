import React from "react";

export default function Layout({ children }) {
  return (
    <div className="text-black">
      <header>
        <nav></nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
