import { Fragment } from "react";
import Hero from "../components/HomeComponents/Hero";
import Features from "../components/HomeComponents/Features";
import FAQs from "../components/HomeComponents/FAQs";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
      <FAQs />
    </Fragment>
  );
};

export default HomePage;
