import React from 'react';

import { Button, Container, Typography } from '@mui/material';
import { AuthService } from '@utils/auth';

import { HeaderSX } from './styles';

export const Header: React.FC = () => {
  const handleLogout = (): void => {
    void AuthService.logout();
  };

  return (
    <Container component="header" maxWidth={false} sx={HeaderSX}>
      <Typography>Header</Typography>
      <Button onClick={handleLogout}>Log Out</Button>
    </Container>
  );
};
