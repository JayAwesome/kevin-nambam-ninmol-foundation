import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppShell } from './App';
import { LanguageProvider } from './context/LanguageContext';

export function render(url) {
  return renderToString(
    <React.StrictMode>
      <LanguageProvider>
        <StaticRouter location={url}>
          <AppShell />
        </StaticRouter>
      </LanguageProvider>
    </React.StrictMode>,
  );
}
