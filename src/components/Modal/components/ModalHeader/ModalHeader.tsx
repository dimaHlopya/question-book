import { type FC, type MouseEvent, type PropsWithChildren } from 'react';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, IconButton, Typography } from '@mui/material';

import { HeaderBoxSX, HeaderCloseButtonSX } from '../../styles/HeaderSX';

interface ModalHeaderProps {
  onClose?: (event: MouseEvent, reason: 'backdropClick' | 'escapeKeyDown') => void;
}

export const ModalHeader: FC<PropsWithChildren<ModalHeaderProps>> = ({ children, onClose }) => {
  return (
    <Box sx={HeaderBoxSX}>
      <Typography variant="h3" color="text.secondary">
        {children}
      </Typography>
      <IconButton
        sx={HeaderCloseButtonSX}
        onClick={(event) => {
          !!onClose && onClose(event, 'backdropClick');
        }}>
        <CloseRoundedIcon style={{ color: 'text.secondary' }} />
      </IconButton>
    </Box>
  );
};
