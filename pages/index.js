import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from "styles/Home.module.css";
import { TextField, Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  border: "1px solid blue",
  borderRadius: "10px"
}));

const Fun = styled(Paper)(() => ({
  textAlign: 'center',
  width:'100%'
}));

export default function BasicGrid() {

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmpassword: ''
      }}

      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),

        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),

        email: Yup.string().email('Invalid email address').required('Required'),

        password: Yup.string()
          .min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),

        confirmpassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Password must match')
          .required('Confirm password is required'),
      })}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 100);
      }}>

      {({ errors, touched }) => {
        return (

          <Form className={styles.btn}>
            <h1>Signup Form</h1>
            <Grid container xs={10} md={6}>

              <Grid item xs={12} md={6}>
                <Item><Field as={TextField} name="firstName" type="text" label="First name" placeholder="Enter your first name" error={Boolean(errors.firstName) && Boolean(touched.firstName)} helperText={ Boolean(touched.firstName) && errors.firstName} />
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item>
                  <Field as={TextField} name="lastName" label="Last Name" placeholder="Enter your last name" type="text" error={Boolean(errors.lastName) && Boolean(touched.lastName)} helperText={Boolean(touched.lastName) && errors.lastName} />
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item>
                  < Field as={TextField} name="email" label="Email" type="email" placeholder="Enter your email" error={Boolean(errors.email) && Boolean(touched.email)} helperText={Boolean(touched.email) && errors.email} />
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item>
                  <Field as={TextField} name="password" label="Password" type="password" placeholder="Enter your password" error={Boolean(errors.password) && Boolean(touched.password)} helperText={Boolean(touched.password) && errors.password} />
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item>
                  <Field as={TextField} name="confirmpassword" label="Confirmpassword" type="password" placeholder="Confirm your password here" error={Boolean(errors.confirmpassword) && Boolean(touched.confirmpassword)} helperText={Boolean(touched.confirmpassword) && errors.confirmpassword} />
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Fun>
                  <Button type="submit" variant="contained" color="success">Signup</Button>
                </Fun>
              </Grid>

            </Grid>
          </Form>
        )
      }}
    </Formik>

  );
}