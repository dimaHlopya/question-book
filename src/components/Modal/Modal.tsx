import { type FC } from 'react';

import { Box, Modal as MuiModal, type ModalProps as MuiModalProps } from '@mui/material';

import { ModalHeader } from './components/ModalHeader';
import { ModalBoxSX } from './styles/ModalSX';

type ModalProps = MuiModalProps & {
  header?: string;
};

export const Modal: FC<ModalProps> = ({ header, children, ...props }) => {
  return (
    <MuiModal {...props}>
      <Box sx={ModalBoxSX}>
        <ModalHeader onClose={props.onClose}>{header}</ModalHeader>
        <Box sx={{ padding: '20px 32px' }}>{children}</Box>
      </Box>
    </MuiModal>
  );
};
