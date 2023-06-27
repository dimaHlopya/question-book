import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/Header';
import Navbar from '@components/Navbar';
import withProtectedRoute from '@guard/permission.guard';
import { Container, Grid } from '@mui/material';

import { MainContainerSX, MainGridSX } from './styles/MainTemplateSX';

const MainTemplate: React.FC = () => {
  return (
    <Grid container component="main">
      <Grid item xs={12} sx={{ height: 60 }}>
        <Header />
      </Grid>
      <Grid item xs={2}>
        <Navbar />
      </Grid>
      <Grid item xs={10} sx={MainGridSX}>
        <Container maxWidth={false} sx={MainContainerSX}>
          <Outlet />
        </Container>
      </Grid>
    </Grid>
  );
};

export default withProtectedRoute(MainTemplate);
