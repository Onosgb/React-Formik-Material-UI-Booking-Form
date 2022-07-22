import React from "react";
import "./App.css";
import Header from "./Components/Header/index";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";
import TextField from "./Components/FormUI/TextField";
import Select from "./Components/FormUI/Select";
import countries from "./data/countries.json";
import DateTypePicker from "./Components/FormUI/DateTimePicker";
import Checkbox from "./Components/FormUI/Checkbox";
import Button from "./Components/FormUI/Button/Button";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  arrivalDate: "",
  departureDate: "",
  message: "",
  termsOfService: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().min(2, "Too short").required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Required"),
  addressLine1: Yup.string(),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  arrivalDate: Yup.date().required("Required"),
  departureDate: Yup.date().required("Required"),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], "Terms and conditions must be accepted.")
    .required("Terms and conditions must be accepted."),
});

const App = () => {
  let theme = useTheme();

  theme = {
    spacing: [0, 2, 3, 5, 8],
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={theme.spacing}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your details</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField name="firstName" label="First Name" />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField name="lastName" label="Last Name" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField name="email" label="Email" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField name="phone" label="Phone Number" />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Address</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField name="addressLine1" label="Address Line 1" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField name="addressLine2" label="Address Line 2" />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField name="city" label="City" />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField name="state" label="State" />
                  </Grid>

                  <Grid item xs={12}>
                    <Select
                      name="country"
                      label="Country"
                      options={countries}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Booking information</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <DateTypePicker name="arrivalDate" label="Arrival Date" />
                  </Grid>

                  <Grid item xs={6}>
                    <DateTypePicker
                      name="departureDate"
                      label="Departure Date"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="message"
                      label="Message"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Checkbox
                      name="termsOfService"
                      legend="Terms Of Service"
                      label="I agree"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button>Submit Form</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
