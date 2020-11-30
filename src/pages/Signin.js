import React from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Avatar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../firebase/firebase.utils";
import { Formik } from "formik";
import * as Yup from "yup";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: "10rem",
    height: "calc(100vh - 19.0625rem)",
    textAlign: "center",
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.secondary.main,
  },
}));

const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

function Signin() {
  const signinStyles = stylesFunc();

  const handleGoogleButtonClick = () => {
    firebase.useGoogleProvider();
  };
  const handleFormSubmit = (values) => {
    //   alert(JSON.stringify(values, null, 2));
    firebase.signin(values.email, values.password);
  };
  return (
    <Container className={signinStyles.wrapper} maxWidth="sm">
      <Avatar className={signinStyles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h4" >
        Sign In
      </Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signInValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            {/* {JSON.stringify(errors)} */}
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email}
                  helperText={errors.email}
                />
                {/* <p>{errors.email}</p> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={errors.password}
                  helperText={errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                >
                  Register
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleGoogleButtonClick}
                >
                  SignUp with Google
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Container>
  );
}

export default Signin;
