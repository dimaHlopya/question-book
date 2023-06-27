import { type Application } from '@customTypes/applications';
import { queryClient } from '@hooks/queryClient';

import { applicationsQuery } from './queries';

export const applicationsLoader = () => async (): Promise<{ applications: Application[] }> => {
  const query = applicationsQuery();

  return {
    applications: queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query)),
  };
};
