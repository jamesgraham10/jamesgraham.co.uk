import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Experience />
    </Layout>
  );
}
