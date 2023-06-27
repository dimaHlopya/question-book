import { type OpenCloseElement } from '@components/OpenClose/OpenClose';
import { type Question } from '@customTypes/questions';

export const transformedQuestionsToOpenClose = (questions: Question[]): OpenCloseElement[] => {
  return questions?.map((question) => ({
    id: question.id,
    title: question.title,
    description: question.answer,
  }));
};
