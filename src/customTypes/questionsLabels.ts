export interface Label {
  id: string;
  title: string;
}

export interface LabelProps {
  questionsCategory?: string;
}

export interface LabelQuery {
  queryKey: string[];
  queryFn: () => Promise<Label[]>;
}
