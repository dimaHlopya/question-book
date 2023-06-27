export interface Question {
  id: string;
  title: string;
  answer: string;
  rating: number;
}

export interface QuestionProps {
  questionsCategory?: string;
  questionLabel?: string;
}

export interface QuestionQuery {
  queryKey: string[];
  queryFn: () => Promise<Question[]>;
}

export interface AddQuestionData extends Record<string, unknown> {
  title: string;
  answer: string;
  rating: number;
  categoryId: string;
  labelIds: string[];
}
