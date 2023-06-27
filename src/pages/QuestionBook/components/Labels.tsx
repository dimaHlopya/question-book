import { type FC, useEffect, useState } from 'react';
import { Outlet, useLoaderData, useNavigate, useParams } from 'react-router-dom';

import Search from '@components/Search';
import { type Label } from '@customTypes/questionsLabels';
import { Add } from '@mui/icons-material';
import { Container, Tab, Tabs } from '@mui/material';
import { RouteNames } from '@router/RoteNames';

import { AddLabelTabSX, LabelContainerSX } from '../styles/LabelsSX';

interface LoaderData {
  labels: Label[];
}

export const Labels: FC = () => {
  const { category = '' } = useParams();
  const navigate = useNavigate();
  const { labels } = useLoaderData() as LoaderData;
  const [label, setLabel] = useState(labels[0]?.id);
  const [search, setSearch] = useState('');

  useEffect(() => {
    navigate(RouteNames.QUESTIONS_LABEL.replace(':category', category).replace(':label', label));
  }, [label, category]);

  return (
    <Container disableGutters sx={LabelContainerSX}>
      <Container sx={{ width: 'max-content' }} disableGutters>
        <Search
          sx={{ borderRadius: '5px 0 0 0' }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Tabs value={label} sx={{ width: '100%', height: '100%' }}>
          <Tab
            sx={AddLabelTabSX}
            iconPosition="start"
            icon={<Add />}
            label="Add Label"
            onClick={() => {
              alert('Should be an Add Label Form');
            }}
          />
          {labels?.map(({ id, title }) => (
            <Tab
              key={id}
              label={title}
              value={id}
              onClick={() => {
                setLabel(id);
              }}
            />
          ))}
        </Tabs>
      </Container>
      <Container sx={{ padding: '24px' }}>
        <Outlet />
      </Container>
    </Container>
  );
};
