import React, { Suspense } from 'react';
import { Await, Link, useLoaderData } from 'react-router-dom';

import { type Application } from '@customTypes/applications';
import { Container, List, ListItemButton, ListItemText } from '@mui/material';

import { ListItemSX, NavbarSX } from './styles';
interface LoaderData {
  applications: Application[];
}

export const Navbar: React.FC = () => {
  const data = useLoaderData();
  const { applications } = data as LoaderData;

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Container sx={NavbarSX} disableGutters={true} component="aside">
        <Await resolve={applications}>
          {(resolvedApplications: Application[]) => (
            <List component="nav">
              {resolvedApplications?.map((application: Application) => (
                // rewrite after UI theme integration
                <ListItemButton key={application?.id} sx={ListItemSX}>
                  <Link to={application?.url}>
                    <ListItemText primary={application?.title} />
                  </Link>
                </ListItemButton>
              ))}
            </List>
          )}
        </Await>
      </Container>
    </Suspense>
  );
};
