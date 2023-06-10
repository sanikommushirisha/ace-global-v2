import React from "react";
import { Button, Grid } from "@mui/material";

//@ts-expect-error
import logo from "src/images/logo.svg";
import { Menu } from "src/components/menu";
import { HeaderItems } from "./HeaderItems";
import { Link } from "src/components/link";

const SOLUTIONS = [
  { link: "testing", title: "Audit Assistance" },
  { link: "testing", title: "Financial Reporting" },
  { link: "testing", title: "Tax Assistance" }
];

const USECASES = [
  { link: "testing", title: "Accountant" },
  { link: "testing", title: "CPA" },
  { link: "testing", title: "Virtual Assistant" }
];

const CASESTUDIES = [
  { link: "testing", title: "Audit Assistance" },
  { link: "testing", title: "Financial Reporting" },
  { link: "testing", title: "Tax Assistance" },
  { link: "testing", title: "HR Assistance" }
];

const MENUITEMS = [
  {
    label: `Solutions`,
    items: SOLUTIONS
  },
  {
    label: `Use cases`,
    items: USECASES
  },
  {
    label: `Case Studies`,
    items: CASESTUDIES
  }
];

export const Header = () => {
  return (
    <Grid
      container
      direction="row"
      height="84px"
      p="10px 24px"
      alignItems="center"
      sx={{ zIndex: 20, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
      <Grid container flex={1}>
        <Link to="/">
          <img src={logo} alt="logo" height="64px" width="64px" />
        </Link>
        <Grid
          item
          md={8}
          xs={10}
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center"
          }}>
          {MENUITEMS.map(({ label, items }) => (
            <Menu key={label} title={label}>
              <HeaderItems items={items} />
            </Menu>
          ))}
        </Grid>
      </Grid>
      <Grid>
        <Grid container direction="row" alignItems="center" gap="32px">
          <Grid item>
            <Link to="/about-us" size="small">
              About
            </Link>
          </Grid>
          <Grid item>
            <Link to="/resources/blogs" size="small">
              Blogs
            </Link>
          </Grid>
          <Button color="primary" variant="outlined">
            Signup
          </Button>
          <Button color="primary" variant="contained">
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
