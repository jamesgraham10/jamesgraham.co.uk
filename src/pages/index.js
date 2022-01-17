import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <Projects />
    </Layout>
  );
}
