import { type FC, useEffect, useState } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';

import { type Category } from '@customTypes/questionsCategories';
import { Autocomplete, TextField } from '@mui/material';
import { RouteNames } from '@router/RoteNames';

interface LoaderData {
  categories: Category[];
}

export const Categories: FC = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { categories } = data as LoaderData;
  const [category, setCategory] = useState(categories[0]?.id);

  useEffect(() => {
    navigate(RouteNames.QUESTIONS_CATEGORY.replace(':category', category ?? ''));
  }, [category]);

  return (
    <>
      <Autocomplete
        value={category}
        disablePortal
        options={categories?.map(({ id }) => id)}
        onChange={(_e, option) => {
          setCategory(option as string);
        }}
        getOptionLabel={(option) => categories?.find(({ id }) => id === option)?.title ?? ''}
        renderInput={(params) => <TextField {...params} label="Categories" />}
      />
      <Outlet />
    </>
  );
};
