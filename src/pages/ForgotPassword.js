import React,{useState} from "react";
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
    backgroundColor: theme.palette.primary.main,
  },
  forgotPassword: {
    margin: "1rem",
  }
}));

const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),

});

function ForgotPassword() {


  const [loginError,setLoginError]=useState(null)
  const forgotPasswordStyles = stylesFunc();


  const handleFormSubmit = (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // firebase.forgotPassword(values.email, values.password);
        firebase.forgotPassword(values.email).then(res=>{
      res? setLoginError(res):setLoginError(null)
      });
  };
  return (
    <Container className={forgotPasswordStyles.wrapper} maxWidth="sm">
      <Avatar className={forgotPasswordStyles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography className={forgotPasswordStyles.forgotPassword} variant="h4">
        Sign In
      </Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={forgotPasswordValidationSchema}
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
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
            <p style={{textAlign:"center",color:"red"}}><small>{loginError}</small></p>
          </form>
        )}
      </Formik>
    </Container>
  );
}

export default ForgotPassword;
