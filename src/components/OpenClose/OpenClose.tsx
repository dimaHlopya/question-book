import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material';

import { ContainerSX } from './styles';

export interface OpenCloseElement {
  id: string;
  title: string;
  description: string;
}

interface OpenCloseProps {
  list: OpenCloseElement[];
}

export const OpenClose: React.FC<OpenCloseProps> = ({ list }) => {
  return (
    <Container sx={ContainerSX} disableGutters={true} component="aside">
      {list?.map((listItem: OpenCloseElement) => (
        <Accordion key={listItem?.id}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>{listItem?.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{listItem?.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};
