import React from "react";

import { LandingPage } from "./landingPage/LandingPage";
import { AdvantagesPage } from "./advantagesPage/AdvantagesPage";
import { HiringPage } from "./hiringPage/HiringPage";
import { RemotePage } from "./remotePage/RemotePage";
import { CostSavingsPage } from "./costSavingsPage/CostSavingsPage";
import { FrequentlyAskedQuestions } from "src/containers/common/frequentlyAskedQuestions/FrequentlyAskedQuestions";

export const MainPage = () => {
  return (
    <>
      <LandingPage />
      <AdvantagesPage />
      <HiringPage />
      <RemotePage />
      <CostSavingsPage />
      <FrequentlyAskedQuestions />
    </>
  );
};
