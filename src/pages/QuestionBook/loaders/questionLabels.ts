import { type LoaderFunctionArgs } from 'react-router-dom';

import { queryClient } from '@hooks/queryClient';
import { labelsQuery } from '@pages/QuestionBook/queries';

export const labelsLoader =
  () =>
  async ({ params }: LoaderFunctionArgs) => {
    const questionsCategory = params?.questionsCategory;
    const query = labelsQuery({ questionsCategory });

    return { labels: queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query)) };
  };
