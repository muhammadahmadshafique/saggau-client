import React from "react";
import CurrentMagazin from "../components/CurrentMagazin";
import BentoBox from "../components/BentoBox";
import Dinner from "../components/Dinner";
import Aboutus from "../components/Aboutus";
import Contactus from "../components/Contactus";

function LandingPage() {
  return (
    <>
      <CurrentMagazin />
      <BentoBox/>
      <Dinner/>
      <Aboutus/>
      <Contactus/>
    </>
  );
}

export default LandingPage;
