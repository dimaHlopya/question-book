import { Navigate, type RouteObject } from 'react-router-dom';

import { applicationsLoader } from '@components/Navbar/loaders';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import QuestionBook from '@pages/QuestionBook';
import { Labels } from '@pages/QuestionBook/components/Labels';
import { Questions } from '@pages/QuestionBook/components/Questions';
import { categoriesLoader, labelsLoader, questionsByParamsLoader } from '@pages/QuestionBook/loaders';
import { RouteNames } from '@router/RoteNames';
import LoginTemplate from '@templates/LoginTemplate';
import MainTemplate from '@templates/MainTemplate';

export const router: RouteObject[] = [
  {
    errorElement: <div>Should be ErrorBoundary common component</div>,
    children: [
      {
        path: '/',
        element: <MainTemplate />,
        loader: applicationsLoader(),
        children: [
          {
            path: RouteNames.QUESTIONS_BOOK,
            element: <QuestionBook />,
            loader: categoriesLoader(),
            children: [
              {
                path: RouteNames.QUESTIONS_CATEGORY,
                element: <Labels />,
                loader: labelsLoader(),
                errorElement: <div>Should be error element for Questions page</div>,
                children: [
                  {
                    path: RouteNames.QUESTIONS_LABEL,
                    loader: questionsByParamsLoader(),
                    element: <Questions />,
                    errorElement: <div>Should be error element for Question page</div>,
                  },
                ],
              },
            ],
          },
          {
            path: RouteNames.NOT_FOUND,
            element: <NotFound />,
          },
        ],
      },
      {
        element: <LoginTemplate />,
        children: [
          {
            path: RouteNames.LOGIN,
            element: <Login />,
            errorElement: <div>Should be error element for Login page</div>,
          },
        ],
      },
      {
        element: <NotFound />,
        path: RouteNames.NOT_FOUND,
      },
      {
        path: '*',
        element: <Navigate to={RouteNames.NOT_FOUND} replace />,
      },
    ],
  },
];
