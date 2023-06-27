export interface Category {
  id: string;
  title: string;
}

export interface CategoriesQuery {
  queryKey: string[];
  queryFn: () => Promise<Category[]>;
}
