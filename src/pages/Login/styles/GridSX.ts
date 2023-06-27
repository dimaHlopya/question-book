import loginBanner from '@assets/images/login-banner.png';
import type { SxProps, Theme } from '@mui/material';

export const GridSX: SxProps<Theme> = {
  backgroundColor: 'red',
  height: '100vh',
  background: `url(${loginBanner}) center no-repeat`,
  backgroundSize: 'cover',
  position: 'relative',
};
