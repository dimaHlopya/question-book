import type { SxProps, Theme } from '@mui/material';

export const LoginButtonSX: SxProps<Theme> = {
  border: 'solid 2px #767676',
  height: '48px',
  display: 'flex',
  padding: '8px 40px',
  gap: '10px',
  borderRadius: '24px',
  backgroundColor: 'common.white',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: 'common.white',
    boxShadow: 'rgb(247, 247, 247) 0px 0px 11.2px 11.2px inset',
  },
};
