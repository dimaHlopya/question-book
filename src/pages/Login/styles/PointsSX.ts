import { type CSSProperties } from 'react';

import { type SxProps, type Theme } from '@mui/material';

export const TopPointsSX: CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '110px',
};

export const BottomPointsSX: CSSProperties = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '175px',
};

export const DividerPointSX: SxProps<Theme> = {
  fontSize: '64px',
  lineHeight: '24px',
  fontWeight: 800,
};
