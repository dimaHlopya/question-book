import { defer } from 'react-router-dom';

import { queryClient } from '@hooks/queryClient';
import { categoriesQuery } from '@pages/QuestionBook/queries';

export const categoriesLoader = () => async () => {
  const query = categoriesQuery();
  const categories = queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));

  return defer({
    categories,
  });
};
