import React from "react";
import { Button, Drawer, Grid, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

//@ts-expect-error
import logo from "src/images/big-logo.svg";
import { Link } from "src/components/link";
import styled from "@emotion/styled";

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
      p="10px 10%"
      alignItems="center"
      sx={{
        zIndex: 20,
        flexWrap: "nowrap",
        boxShadow: "var(--tw-shadow)",
        borderBottom: "var(--tw-border)"
      }}>
      <Grid container flex={1}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {/* <Grid
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
        </Grid> */}
      </Grid>
      <Grid
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center"
        }}>
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
          {/* 
          <Button color="primary" variant="outlined">
            Signup
          </Button>
          <Button color="primary" variant="contained">
            Login
          </Button> */}
        </Grid>
      </Grid>
      <Grid item display={{ xs: "block", md: "none" }}>
        <MobileHeader />
      </Grid>
    </Grid>
  );
};

const StyledDrawer = styled(Drawer)({
  ".MuiDrawer-paper": {
    width: "100%",
    marginTop: "70px"
  }
});

const MobileHeader = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (currOpen: any) => (event: any) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(currOpen);
  };
  return (
    <React.Fragment>
      <IconButton color="primary" onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <StyledDrawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        <Grid display={{ xs: "block", md: "none" }}>
          <Grid
            container
            direction="column"
            padding="10%"
            onClick={() => setOpen(false)}
            gap="32px">
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
          </Grid>
        </Grid>
      </StyledDrawer>
    </React.Fragment>
  );
};
