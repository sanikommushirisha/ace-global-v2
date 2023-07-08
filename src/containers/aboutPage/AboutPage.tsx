import React from "react";
import { AboutUsMainPage } from "./aboutUsMainPage/AboutUsMainPage";
import { AboutUsAdvantages } from "./aboutUsAdvantages/AboutUsAdvantages";
import { WhyUs } from "./WhyUs/WhyUs";
import { AceFolks } from "./AceFolks/AceFolks";
import { FrequentlyAskedQuestions } from "src/containers/common/frequentlyAskedQuestions/FrequentlyAskedQuestions";
import { TalkToUs } from "../common/talkToUs/TalkToUs";

export const AboutPage = () => {
  return (
    <>
      <AboutUsMainPage />
      <AboutUsAdvantages />
      <WhyUs />
      <AceFolks />
      <TalkToUs />
      <FrequentlyAskedQuestions />
    </>
  );
};
