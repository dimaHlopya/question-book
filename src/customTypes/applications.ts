export interface Application {
  id: string;
  title: string;
  url: string;
}

export interface ApplicationQuery {
  queryKey: string[];
  queryFn: () => Promise<Application[]>;
}
