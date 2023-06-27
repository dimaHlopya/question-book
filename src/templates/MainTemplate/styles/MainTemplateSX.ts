import { type SxProps, type Theme } from '@mui/material';

export const MainGridSX: SxProps<Theme> = {
  minHeight: 'calc(100vh - 60px)',
  backgroundColor: 'grey.50',
  padding: '24px',
};

export const MainContainerSX: SxProps<Theme> = {
  backgroundColor: 'white',
  minHeight: '100%',
  borderRadius: '5px',
  border: '1px solid',
  borderColor: 'grey.200',
  padding: '24px',
};
