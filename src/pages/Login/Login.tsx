import { type FC } from 'react';
import { Navigate } from 'react-router-dom';

import googleLogo from '@assets/icons/google-logo.svg';
import { Button, Container, Grid, Link, Typography } from '@mui/material';
import { AuthService } from '@utils/auth';

import InformationGrid from './components/InformationGrid';
import { RightContainerSX } from './styles/ContainerSX';
import { LoginButtonSX } from './styles/LoginButtonSX';
import { SupportLinkSX } from './styles/SupportLinkSX';

export const Login: FC = () => {
  const handleSignIn = (): void => {
    void AuthService.login({ redirectUri: window.location.origin });
  };

  if (AuthService.isLoggedIn()) {
    return <Navigate to="/" />;
  }

  return (
    <Grid container>
      <InformationGrid />
      <Grid item xs={12} md={6}>
        <Container sx={RightContainerSX}>
          <Typography variant="h1" color="text.secondary">
            Question Book
          </Typography>
          <Button sx={LoginButtonSX} onClick={handleSignIn}>
            <img alt="googleLogo" src={googleLogo} />
            <Typography variant="subtitle2">Continue with Google</Typography>
          </Button>
          <Link href="/" target="_blank" sx={SupportLinkSX}>
            Техническая поддержка
          </Link>
        </Container>
      </Grid>
    </Grid>
  );
};
