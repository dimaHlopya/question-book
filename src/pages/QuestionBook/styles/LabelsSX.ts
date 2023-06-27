import { type SxProps, type Theme } from '@mui/material';

export const LabelContainerSX: SxProps<Theme> = {
  borderRadius: '5px',
  border: '1px solid',
  borderColor: 'grey.200',
  overflow: 'hidden',
  display: 'flex',
  marginTop: '24px',
};

export const AddLabelTabSX: SxProps<Theme> = {
  minHeight: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  backgroundColor: 'primary.main',
  color: 'common.white',
};
