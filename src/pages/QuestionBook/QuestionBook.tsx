import React, { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import { type Category } from '@customTypes/questionsCategories';
import { Container } from '@mui/material';

import { Categories } from './components/Categories';
interface LoaderData {
  categories: Category[];
}

export const QuestionBook: React.FC = () => {
  const data = useLoaderData();
  const { categories } = data as LoaderData;

  return (
    <Container maxWidth={false} disableGutters>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={categories} errorElement={<div>Could not load categories 😬</div>}>
          <Categories />
        </Await>
      </Suspense>
    </Container>
  );
};
