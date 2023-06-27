import { type FC } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';

import Form from '@components/Form';
import { CATEGORIES_QUERY_KEY } from '@constants/questionCategories.ts';
import { LABELS_QUERY_KEY } from '@constants/questionLabels.ts';
import { QUESTIONS_QUERY_KEY } from '@constants/questions.ts';
import { type AddQuestionData } from '@customTypes/questions.ts';
import { type Category } from '@customTypes/questionsCategories.ts';
import { type Label } from '@customTypes/questionsLabels.ts';
import { useForm } from '@hooks/useForm.ts';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import { addQuestion } from '@services/questions';

interface AddQuestionFormProps {
  hideModal: () => void;
}

export const AddQuestionForm: FC<AddQuestionFormProps> = ({ hideModal }) => {
  const { questionsCategory, questionLabel } = useParams();
  const { data: categories } = useQuery<Category[]>(CATEGORIES_QUERY_KEY);
  const { data: labels } = useQuery<Label[]>(LABELS_QUERY_KEY);
  const { register, handleSubmit, reset } = useForm<AddQuestionData>({
    title: '',
    answer: '',
    rating: 0,
    categoryId: questionsCategory as string,
    labelIds: [questionLabel as string],
  });
  const queryClient = useQueryClient();
  const { mutate } = useMutation(addQuestion, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([QUESTIONS_QUERY_KEY]);
    },
  });

  const onSubmit = (values: AddQuestionData): void => {
    mutate(values);
    reset();
    hideModal();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField label="Question" {...register('title', { required: true })} />
      <TextField label="Answer" {...register('answer', { required: true })} />
      <Select {...register('categoryId', { required: true })} label="Category">
        {categories?.map(({ id, title }) => (
          <MenuItem value={id} key={id}>
            {title}
          </MenuItem>
        ))}
      </Select>
      <Select multiple {...register('labelIds', { required: true })} label="Label">
        {labels?.map(({ id, title }) => (
          <MenuItem value={id} key={id}>
            {title}
          </MenuItem>
        ))}
      </Select>
      <Button type="submit">Save</Button>
    </Form>
  );
};
