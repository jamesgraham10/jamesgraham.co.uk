import React from "react";
import Layout from "../components/Layout";
import Hero from "../features/Hero/Hero";
import Projects from "../features/Projects/Projects";
import Experience from "../features/Experience/Experience";

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Experience />
    </Layout>
  );
}
