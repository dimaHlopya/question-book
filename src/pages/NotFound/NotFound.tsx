import { type FC } from 'react';

import { Container, Typography } from '@mui/material';

export const NotFound: FC = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
      <Typography variant="h1" color="primary" sx={{ fontSize: '96px', margin: 'auto' }}>
        404
      </Typography>
      <Typography variant="h1" color="text.secondary">
        Page Not Found :(
      </Typography>
    </Container>
  );
};
