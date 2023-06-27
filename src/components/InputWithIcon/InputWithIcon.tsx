import { forwardRef, type ForwardRefExoticComponent, type ReactNode, type RefAttributes } from 'react';

import { InputAdornment, OutlinedInput, type OutlinedInputProps } from '@mui/material';

type InputWithIconProps = Omit<OutlinedInputProps, 'ref'> & {
  Icon?: ReactNode;
  iconPosition?: 'start' | 'end';
};

export const InputWithIcon: ForwardRefExoticComponent<InputWithIconProps & RefAttributes<HTMLInputElement>> =
  forwardRef<HTMLInputElement, InputWithIconProps>(({ Icon, iconPosition = 'start', ...props }, ref) => {
    return (
      <OutlinedInput
        startAdornment={iconPosition === 'start' && <InputAdornment position="start">{Icon}</InputAdornment>}
        endAdornment={iconPosition === 'end' && <InputAdornment position="end">{Icon}</InputAdornment>}
        ref={ref}
        {...props}
      />
    );
  });

InputWithIcon.displayName = 'InputWithIcon';
