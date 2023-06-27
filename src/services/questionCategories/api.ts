import { CATEGORIES_QUERY_KEY } from '@constants/questionCategories';
import { type Category } from '@customTypes/questionsCategories';
import axios from 'axios';

export const fetchCategories = async (): Promise<Category[]> => {
  return await axios.get(`http://localhost:3000/${CATEGORIES_QUERY_KEY}`).then((response) => response.data);
};
