import { Fragment } from "react";
import Hero from "../components/HomeComponents/Hero";
import Features from "../components/HomeComponents/Features";
import Login from "../components/AuthComponents/Login";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
    </Fragment>
  );
};

export default HomePage;
