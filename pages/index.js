import React from 'react';
import { Box, Button, createTheme, CssBaseline, ThemeProvider, Typography, useTheme, Grid, TextField, Paper, styled } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00FF00',
    },

    secondary: {
      light: '#0000FF',
      main: '#0000FF',
      contrastText: '#ffcc00',
      mode: 'dark',
    },
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
});

const User = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}))

const StyledGrid = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
}))

const Styledbutton = styled('button')(() => ({
  color: 'blue',
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: '10px',
  width: '500px'
}))

const index = () => {
  return (
    // <ThemeProvider theme={theme}>
    //   <Typography sx={{color:theme.palette.secondary.dark}}>hello world</Typography>
    //   <Typography sx={{color:theme.palette.primary.light}}>hello world</Typography>
    //   <CssBaseline />
    //   <main>dark mode</main>
    //   <Button variant="contained" color="secondary">Success</Button>
    //   <Button variant="contained">Error</Button>
    // </ThemeProvider>

    <>
      <User>
        <Grid container xs={12} md={6} >
          <Grid item xs={12} md={4}>
            <TextField label="firstname" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="lastname" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="email" />
          </Grid>
          <Grid>
            <Button variant='contained'>Submit</Button>
          </Grid>
        </Grid>
      </User>

      <Styledbutton>
        hello
      </Styledbutton>


    </>

  )
}

export default index;