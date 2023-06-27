import { type SxProps, type Theme } from '@mui/material';

export const SearchSX: SxProps<Theme> = {
  backgroundColor: 'grey.50',
  maxWidth: '260px',
  '& fieldset': {
    border: 'none',
  },
  '&:hover fieldset': {
    border: 'none',
  },
};
