import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Paper from '@mui/material/Paper';
import { Button, Grid, TextField } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  display:'flex',
  justifyContent:'center',
  // height:'100vh',
  alignItems:'center'
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

      {({ errors, touched }) => (

        <Form>
          <Grid container md={6}>

            <Grid item xs={8} md={6}>
              <Item><Field as={TextField} fullWidth label="FirstName" name="firstName" type="text" error={touched.firstName && Boolean(errors.firstName)} helperText={touched.firstName && errors.firstName} /></Item>
            </Grid>
            <Grid item xs={4} md={6}>
              <Item><Field as={TextField} fullWidth label="LastName" name="lastName" type="text" error={touched.lastName && Boolean(errors.lastName)} helperText={touched.lastName && errors.lastName} /></Item>
            </Grid>
            <Grid item xs={4} md={12}>
              <Item><Field as={TextField} fullWidth label="Email" name="email" type="email" error={touched.email && Boolean(errors.email)} helperText={touched.email && errors.email} /></Item>
            </Grid>
            <Grid item xs={8} md={6}>
              <Item><Field as={TextField} fullWidth label="Password" name="password" type="password" error={touched.password && Boolean(errors.password)} helperText={touched.password && errors.password} /></Item>
            </Grid>
            <Grid item xs={8} md={6}>
              <Item><Field as={TextField} fullWidth label="Confirmpassword" name="confirmpassword" type="password" error={touched.confirmpassword && Boolean(errors.confirmpassword)} helperText={touched.confirmpassword && errors.confirmpassword} /></Item>
            </Grid>
            <Grid item xs={8} md={12}>
              <Item><Button fullWidth variant='outlined' type="submit">Signup</Button></Item>
            </Grid>

          </Grid>
        </Form>
      )}


    </Formik>
  );
}