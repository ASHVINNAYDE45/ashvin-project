import LandingPage from "@/components/landingPage";
import React from "react";
import LayoutPage from "@/components/layout";

function Home() {
  return <LandingPage />
  
};
Home.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Home;