import React from "react";
import { Helmet } from "react-helmet";
import { AboutUsMainPage } from "./aboutUsMainPage/AboutUsMainPage";
import { AboutUsAdvantages } from "./aboutUsAdvantages/AboutUsAdvantages";
import { WhyUs } from "./WhyUs/WhyUs";
import { AceFolks } from "./AceFolks/AceFolks";
import { FrequentlyAskedQuestions } from "src/containers/common/frequentlyAskedQuestions/FrequentlyAskedQuestions";
import { TalkToUs } from "../common/talkToUs/TalkToUs";

export const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Ace Global - A Finance & Accounting Outsourcing Service Provider</title>
        <meta
          name="description"
          content="Ace Global is a top talent provider that offers audit, tax, accounting, and other accounting services to accounting firms across the US."
        />
        <link rel="canonical" href="https://aceglobal.ai/about-us"></link>
      </Helmet>
      <AboutUsMainPage />
      <AboutUsAdvantages />
      <WhyUs />
      <AceFolks />
      <TalkToUs />
      <FrequentlyAskedQuestions />
    </>
  );
};
