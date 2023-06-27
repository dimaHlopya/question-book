import type { SxProps, Theme } from '@mui/material';

export const LeftContainerSX: SxProps<Theme> = {
  height: '100%',
  background: 'linear-gradient( 1.86deg, rgba(233, 57, 86, 0.7) -30.92%, rgba(0, 0, 0, 0.53) 98.5% )',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export const RightContainerSX: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
};

export const IconContainerSX: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '30px',
};

export const TextContainerSX: SxProps<Theme> = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',

  '& div ': {
    maxWidth: '400px',
  },
};
