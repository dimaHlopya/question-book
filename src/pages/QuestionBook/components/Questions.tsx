import React from 'react';
import { useQuery } from 'react-query';

import { Modal } from '@components/Modal';
import OpenClose from '@components/OpenClose';
import Search from '@components/Search';
import { QUESTIONS_QUERY_KEY } from '@constants/questions';
import { type Question } from '@customTypes/questions';
import { useModal } from '@hooks/useModal';
import { Box, Button, Container } from '@mui/material';
import { fetchQuestions } from '@services/questions';

import { transformedQuestionsToOpenClose } from '../helpers/question';
import { AddQuestionForm } from './AddQuestionForm';

export const Questions: React.FC = () => {
  const { isModalOpen, showModal, hideModal } = useModal();
  const { data: questions } = useQuery<Question[]>(QUESTIONS_QUERY_KEY, fetchQuestions);
  const transformedQuestions = transformedQuestionsToOpenClose(questions ?? []);

  return (
    <Container disableGutters={true}>
      <Box sx={{ width: '100%', display: 'flex', gap: '24px' }}>
        <Search sx={{ flexGrow: 1 }} />
        <Button onClick={showModal}>Add question</Button>
      </Box>
      <OpenClose list={transformedQuestions} />
      <Modal open={isModalOpen} onClose={hideModal} header="Add Question Form">
        <AddQuestionForm hideModal={hideModal} />
      </Modal>
    </Container>
  );
};
