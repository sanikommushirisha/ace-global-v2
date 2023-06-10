import React from "react";

import { LandingPage } from "./landingPage/LandingPage";
import { ImprovePage } from "./improvePage/ImprovePage";
import { RemotePage } from "./remotePage/RemotePage";
import { WorkPage } from "./workPage/WorkPage";
import { AccountingProfessionalsPage } from "./accountingProfessionalsPage/AccountingProfessionalsPage";

export const MainPage = () => {
  return (
    <>
      <LandingPage />
      <ImprovePage />
      <RemotePage />
      <WorkPage />
      <AccountingProfessionalsPage />
    </>
  );
};
