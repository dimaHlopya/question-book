import { CATEGORIES_QUERY_KEY } from '@constants/questionCategories';
import { type CategoriesQuery } from '@customTypes/questionsCategories';
import { fetchCategories } from '@services/questionCategories';

export const categoriesQuery = (): CategoriesQuery => ({
  queryKey: [CATEGORIES_QUERY_KEY],
  queryFn: async () => await fetchCategories(),
});
