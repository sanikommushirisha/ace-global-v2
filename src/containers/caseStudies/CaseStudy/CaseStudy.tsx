import React from "react";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
//@ts-expect-error
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

import "./CaseStudy.css";

export const CaseStudy = ({ file }: any) => {
  const [, setNumPages] = React.useState(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <Document className="blogDoc" file={file} onLoadSuccess={onDocumentLoadSuccess}>
      <Grid width={matches ? "100vw" : "80vw"} m={matches ? "0%" : "0%"}>
        <Page
          fullWidth
          className="blogPage"
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Grid>
    </Document>
  );
};
