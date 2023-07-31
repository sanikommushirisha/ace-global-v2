import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

import { CaseStudy } from "./CaseStudy/CaseStudy";

//@ts-expect-error
import AuditPdf from "./case-studies/audit.pdf";
//@ts-expect-error
import TaxPdf from "./case-studies/tax.pdf";
//@ts-expect-error
import hrPdf from "./case-studies/hr.pdf";
//@ts-expect-error
import frPdf from "./case-studies/financial-reporting.pdf";

const blogIdFileMapping: any = {
  audit: AuditPdf,
  financialReporting: frPdf,
  hr: hrPdf,
  tax: TaxPdf
};

const CaseStudies = () => {
  const params = useParams();
  const file = blogIdFileMapping[params?.blogId || "audit"];

  return (
    <Grid display="flex" alignItems="center" justifyContent="center">
      <CaseStudy file={file} />
    </Grid>
  );
};

export { CaseStudies };
export default CaseStudies;
