import { type SxProps, type Theme } from '@mui/material';

export const IconSX: SxProps<Theme> = {
  width: '96px',
  height: '96px',
  padding: '20px',
  borderRadius: '50%',
  border: '2px solid',
  color: 'white',
  marginRight: '15px',

  '&:last-child': {
    marginRight: 0,
  },
};
