import React from "react";
import { Helmet } from "react-helmet";

export default function Layout({ children }) {
  const pageTitle = "James Graham | JavaScript Developer";
  const description =
    "4+ years experience with React, Node.js and various other tasty JS flavors. In my own time I like to run, cook, share food with friends and travel. ";
  const url = "https://jamesgraham.co.uk";
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#0e349c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <div className="text-black">
        <main>{children}</main>
        <footer className="py-8 bg-topography">
          <div className="max-w-screen-2xl text-sm text-accent mx-auto text-center font-medium">
            <p>© 2022, James Graham. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
