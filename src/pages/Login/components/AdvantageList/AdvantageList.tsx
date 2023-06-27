import { type FC } from 'react';

import { Container, Typography } from '@mui/material';

import { ADVANTAGES } from '../../constants/Advantages';
import { TextContainerSX } from '../../styles/ContainerSX';
import { DividerPointSX } from '../../styles/PointsSX';

export const AdvantageList: FC = () => {
  return (
    <Container sx={TextContainerSX} disableGutters>
      <Typography variant="h1" color="common.white">
        Question Book
      </Typography>
      {ADVANTAGES.map((advantage, id) => (
        <Container key={advantage} disableGutters>
          <Typography color="common.white">{advantage}</Typography>
          {id !== ADVANTAGES.length - 1 && (
            <Typography color="common.white" sx={DividerPointSX}>
              ·
            </Typography>
          )}
        </Container>
      ))}
    </Container>
  );
};
