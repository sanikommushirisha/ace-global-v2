import { Grid, Typography } from "@mui/material";
import React from "react";

import { Accordion, AccordionSummary, AccordionDetails } from "src/components/accordion/Accordion";
//@ts-ignore
import questionSrc from "src/images/questions.svg";

export const FrequentlyAskedQuestions = () => {
  const questions = [
    {
      question: "Are you recruiters or staffing agencies?",
      answer:
        "Yes, we are an accounting talent outsourcing firm. We specialize in providing on-demand accounting talent to small and mid-size CPA firms across the United States. We hire, train, onboard, and manage accounting personnel on your behalf. By outsourcing your accounting talent needs to us, you can focus on your core business while relying on our expertise to ensure you have a dedicated team supporting your accounting functions."
    },
    {
      question: "How do you ensure data privacy and security?",
      answer:
        "We prioritize data privacy and security through strict confidentiality agreements, secure infrastructure, access control, defined data handling procedures, employee training, and compliance with regulations. Our robust 360-degree security system ensures the protection of client information at every stage."
    },
    {
      question: "What countries do you have a presence in?",
      answer:
        "We currently have a strong presence in India with five offices and a dedicated local customer team in California, USA. Additionally, we have talented professionals working across various countries in Asia, enabling us to serve clients on a global scale."
    },
    {
      question: "How long does it take to hire accountants?",
      answer:
        "Our hiring process for accountants, or CPAs, takes around 2–3 weeks, from candidate sourcing to the first hire's start date."
    },
    {
      question: "Can we hire accountants for short durations?",
      answer:
        "Certainly! We accommodate on-demand hiring needs for accountants. Whether it's for temporary projects, seasonal demands, or specific requirements, we provide qualified professionals to meet your short-term needs without compromising quality or expertise."
    }
  ];
  return (
    <Grid
      container
      width="100%"
      direction={{ xs: "column", sm: "column", md: "row" }}
      flexWrap="nowrap"
      px="10%"
      py="64px"
      alignItems="flex-start"
      rowGap="32px">
      <Grid container item direction="column" flexWrap="nowrap" lg={7} md={12} sm={12} xs={12}>
        <Typography variant="h3" color="primary">
          Frequently Asked Questions
        </Typography>
        <Grid container direction="column" flexWrap="nowrap" py={{ lg: "32px", md: "16px" }}>
          {questions.map((questionL, index) => {
            const { question, answer } = questionL;
            return (
              <Accordion key={index}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography variant="subtitle1" color="primary">
                    {question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle2" color="primary">
                    {answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Grid>
      </Grid>
      <Grid item lg={5} md={12} sm={12} xs={12} pl="64px">
        <Grid component="img" src={questionSrc} sx={{ maxWidth: "100%", height: "100%" }} />
      </Grid>
    </Grid>
  );
};
