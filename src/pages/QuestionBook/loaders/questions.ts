import { defer, type LoaderFunctionArgs } from 'react-router-dom';

import { queryClient } from '@hooks/queryClient';

import { questionsByParamsQuery, questionsQuery } from '../queries/questionsQueries';

export const questionsLoader = () => async () => {
  const query = questionsQuery();

  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

export const questionsByParamsLoader =
  () =>
  async ({ params }: LoaderFunctionArgs) => {
    const { questionsCategory, questionLabel } = params;
    const query = questionsByParamsQuery({ questionsCategory, questionLabel });
    const questions = queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));

    return defer({
      questions,
    });
  };
