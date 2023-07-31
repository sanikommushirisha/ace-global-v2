import { Alert, Button, Chip, Divider, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import emailjs from "@emailjs/browser";
import { useForm, Controller } from "react-hook-form";

import { TextField, TelInputField } from "src/components";
//@ts-ignore
import contactUsSrc from "src/images/contactUs.svg";
import { Helmet } from "react-helmet";

export const ContactUs = () => {
  const { control, handleSubmit, setValue } = useForm();
  const [open, setOpen] = React.useState(false);
  const [selectedSkills, setSelectedSkills] = React.useState<Array<string>>([]);
  const skills = [
    "Audit assistance",
    "Book Keeping",
    "Risk Management",
    "PCOAB Audit",
    "SOX Audit Compliance",
    "Financial planning & analysis",
    "Payroll Accounting",
    "Tax Planning"
  ];

  const onSubmit = (data: any) => {
    emailjs
      .send(
        //@ts-expect-error
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          message: data.message,
          to_name: "Dinesh",
          from_email: data.email,
          phone: data.contact,
          skills: data.skills.join(", ")
        },
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setOpen(true);
      })
      .catch(() => {
        setOpen(true);
      });
  };
  return (
    <Grid
      container
      flexDirection={{ xs: "column", sm: "column", md: "row" }}
      px="10%"
      py="5%"
      height="auto"
      spacing="64px"
      alignItems="center"
      flexWrap="nowrap">
      <Helmet>
        <title>
          Ace Global Contact Us Page - A Finance & Accounting Outsourcing Service Provider
        </title>
        <link rel="canonical" href="https://aceglobal.ai/contact-us"></link>
        <meta
          name="description"
          content="Ace Global is a top talent provider that offers audit, tax, accounting, and other accounting services to accounting firms across the US."
        />
      </Helmet>
      <Grid container item md={7} lg={7} sm={12} xs={12} direction="column">
        <Typography color="primary" variant="h3" fontWeight={"600 !important"} pb="16px">
          Get In Touch With Us!
        </Typography>
        <Typography color="primary" variant="subtitle2" pb="8px">
          Select the skills you’re looking for
        </Typography>
        <Controller
          control={control}
          name="skills"
          render={() => (
            <Grid container rowSpacing="8px" columnSpacing="16px" width="80%" pb="16px">
              {skills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Tooltip title={skill}>
                    <Chip
                      label={skill}
                      clickable
                      color={selectedSkills.includes(skill) ? "primary" : "default"}
                      onClick={() => {
                        const updatedSkills = selectedSkills.includes(skill)
                          ? selectedSkills.filter((selectedSkill) => selectedSkill !== skill)
                          : [...selectedSkills, skill];
                        setSelectedSkills(updatedSkills);
                        setValue("skills", updatedSkills);
                      }}
                      sx={{
                        backgroundColor: selectedSkills.includes(skill)
                          ? "#290A38"
                          : "rgba(0, 0, 0, 0.05)",
                        height: "48px",
                        borderRadius: "4px",
                        width: "100%"
                      }}
                    />
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          )}
        />
        <Grid
          container
          flexDirection={{ md: "row", sm: "column", xs: "column" }}
          flexWrap="nowrap"
          columnGap="48px"
          rowGap="16px"
          width="100%"
          pt="16px">
          <Grid container item xs flexDirection="column" flexWrap="nowrap" gap="16px">
            <Controller
              control={control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  fullWidth
                  placeholder="Enter your Name"
                  label="Your Name"
                  error={fieldState.invalid}
                  helperText={fieldState.error ? fieldState.error.message : null}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" }
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  fullWidth
                  placeholder="Name@company.com"
                  label="Your Professional E-mail"
                  error={fieldState.invalid}
                  helperText={fieldState.error ? fieldState.error.message : null}
                />
              )}
            />
            <Controller
              control={control}
              name="contact"
              rules={{ required: "Contact is required" }}
              render={({ field, fieldState }) => (
                <TelInputField
                  {...field}
                  fullWidth
                  label="Enter Your Contact Details"
                  error={fieldState.invalid}
                  helperText={fieldState.error ? fieldState.error.message : null}
                />
              )}
            />
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ my: "23px", display: { sm: "none", xs: "none", md: "block" } }}
          />
          <Grid item xs>
            <Controller
              control={control}
              name="message"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Any Message For Us?"
                  multiline
                  fullWidth
                  sx={{ height: "calc(100% - 23px)", "& textarea": { height: "100% !important" } }}
                />
              )}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          sx={{ my: "32px" }}
          onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
        {open && (
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{ width: "100%", py: "16px" }}>
            <Typography>We will reach out to you shortly..</Typography>
          </Alert>
        )}
      </Grid>
      <Grid
        container
        item
        sm={12}
        xs={12}
        lg={5}
        md={5}
        alignItems="flex-start"
        justifyContent="center">
        <Grid component="img" src={contactUsSrc} sx={{ height: "100%", width: "100%" }} />
      </Grid>
    </Grid>
  );
};
