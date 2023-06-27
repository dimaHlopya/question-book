import { QUESTIONS_QUERY_KEY } from '@constants/questions';
import { type QuestionProps, type QuestionQuery } from '@customTypes/questions';
import { fetchQuestionByParams, fetchQuestions } from '@services/questions';

export const questionsQuery = (): QuestionQuery => ({
  queryKey: [QUESTIONS_QUERY_KEY],
  queryFn: async () => await fetchQuestions(),
});

export const questionsByParamsQuery = ({ questionsCategory, questionLabel }: QuestionProps): QuestionQuery => ({
  queryKey: [QUESTIONS_QUERY_KEY],
  queryFn: async () => await fetchQuestionByParams({ questionsCategory, questionLabel }),
});
