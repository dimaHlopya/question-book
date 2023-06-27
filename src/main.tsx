import React from 'react';
import ReactDOM from 'react-dom/client';

import * as Sentry from '@sentry/react';

import App from './App.tsx';
import { AuthService } from './utils/auth';

Sentry.init({
  dsn: 'https://d5ddd277d76e4b9c8bbc13b3d7482875@o4505330520883200.ingest.sentry.io/4505358500495360',
  integrations: [
    new Sentry.BrowserTracing({
      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
      // TODO: add dev, qa and production urls
      tracePropagationTargets: ['localhost'],
    }),
    new Sentry.Replay(),
  ],

  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  // This sets the sample rate at 10%. You may want to change it to 100% while
  // in development and then sample at a lower rate in production.
  replaysSessionSampleRate: 0.1,
  // If you're not already sampling the entire session, change the sample rate
  // to 100% when sampling sessions where errors occur.
  replaysOnErrorSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

AuthService.initKeycloak(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
