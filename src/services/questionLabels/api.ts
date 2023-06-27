import { LABELS_QUERY_KEY } from '@constants/questionLabels';
import { type Label } from '@customTypes/questionsLabels';
import axios from 'axios';

export const fetchLabels = async (questionsCategory: string | undefined): Promise<Label[]> => {
  return await axios
    .get(`http://localhost:3000/${LABELS_QUERY_KEY}?categoryId=${questionsCategory}`)
    .then((response) => response.data);
};
