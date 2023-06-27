import { forwardRef, type ForwardRefExoticComponent, type RefAttributes } from 'react';

import InputWithIcon from '@components/InputWithIcon';
import SearchIcon from '@mui/icons-material/Search';
import { type OutlinedInputProps } from '@mui/material';

import { SearchSX } from './styles/SearchSX.ts';

export const Search: ForwardRefExoticComponent<Omit<OutlinedInputProps, 'ref'> & RefAttributes<HTMLInputElement>> =
  forwardRef<HTMLInputElement, Omit<OutlinedInputProps, 'ref'>>((props, ref) => {
    return <InputWithIcon Icon={<SearchIcon />} placeholder="Поиск..." sx={SearchSX} ref={ref} {...props} />;
  });

Search.displayName = 'Search';
