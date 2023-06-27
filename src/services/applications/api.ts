import { APPLICATIONS_QUERY_KEY } from '@constants/applications';
import { type Application } from '@customTypes/applications';
import axios from 'axios';

export const fetchApplications = async (): Promise<Application[]> => {
  return await axios.get(`http://localhost:3000/${APPLICATIONS_QUERY_KEY}`).then((response) => response.data);
};
