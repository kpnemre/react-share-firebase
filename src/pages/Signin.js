import React from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../firebase/firebase.utils";
import { Formik } from 'formik';

const stylesFunc = makeStyles({
  wrapper: {
    marginTop: "10rem",
  },
});

function Signin() {

  const signinStyles = stylesFunc();

  const handleGoogleButtonClick = () => {
    firebase.useGoogleProvider();
  };
const handleFormSubmit =(values)=>{
    //   alert(JSON.stringify(values, null, 2));


}
  return (
    <Container className={signinStyles.wrapper} maxWidth="sm">
<Formik
       initialValues={{ email: '', password: '' }}
    //    validate={values => {
    //      const errors = {};
    //      if (!values.email) {
    //        errors.email = 'Required';
    //      } else if (
    //        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //      ) {
    //        errors.email = 'Invalid email address';
    //      }
    //      return errors;
    //    }}
       onSubmit={handleFormSubmit}
     >
       {({
         values,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (

      <form onSubmit={handleSubmit}>
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

            />
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

            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth disabled={isSubmitting}>
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