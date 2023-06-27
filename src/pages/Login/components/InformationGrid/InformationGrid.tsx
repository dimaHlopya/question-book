import { type FC } from 'react';

import bottomPoints from '@assets/icons/bottom-dots-pane.svg';
import topPoints from '@assets/icons/top-dots-pane.svg';
import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';

import AdvantageList from '../../components/AdvantageList';
import { ICONS } from '../../constants/Icons';
import { IconContainerSX, LeftContainerSX } from '../../styles/ContainerSX';
import { GridSX } from '../../styles/GridSX';
import { IconSX } from '../../styles/IconSX';
import { BottomPointsSX, TopPointsSX } from '../../styles/PointsSX';

export const InformationGrid: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    matches && (
      <Grid item sm={6} sx={GridSX}>
        <Container sx={LeftContainerSX} disableGutters>
          <img alt="topPoints" src={topPoints} style={TopPointsSX} />
          <img alt="bottomPoints" src={bottomPoints} style={BottomPointsSX} />
          <Container sx={IconContainerSX}>
            {ICONS.map((Icon, id) => (
              <Icon key={id} sx={IconSX} />
            ))}
          </Container>
          <AdvantageList />
        </Container>
      </Grid>
    )
  );
};
