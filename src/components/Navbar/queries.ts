import { APPLICATIONS_QUERY_KEY } from '@constants/applications';
import { type ApplicationQuery } from '@customTypes/applications';
import { fetchApplications } from '@services/applications';

export const applicationsQuery = (): ApplicationQuery => ({
  queryKey: [APPLICATIONS_QUERY_KEY],
  queryFn: async () => await fetchApplications(),
});
