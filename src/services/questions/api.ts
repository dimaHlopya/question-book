import { QUESTIONS_QUERY_KEY } from '@constants/questions';
import { type AddQuestionData, type Question, type QuestionProps } from '@customTypes/questions';
import axios from 'axios';

export const fetchQuestions = async (): Promise<Question[]> => {
  return await axios.get(`http://localhost:3000/${QUESTIONS_QUERY_KEY}`).then((response) => response.data);
};

export const fetchQuestionByParams = async ({
  questionsCategory,
  questionLabel,
}: QuestionProps): Promise<Question[]> => {
  return await axios
    .get(
      `http://localhost:3000/${QUESTIONS_QUERY_KEY}?questionsCategory=${questionsCategory ?? ''}&questionLabel=${
        questionLabel ?? ''
      }`
    )
    .then((response) => response.data);
};

export const addQuestion = async (addQuestionData: AddQuestionData): Promise<Question> =>
  await axios.post(`http://localhost:3000/${QUESTIONS_QUERY_KEY}`, addQuestionData);
