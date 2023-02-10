import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import App from '../client/components/App';

async function serverRender(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.write('<!DOCTYPE html>');
  res.write('<html>');

  const styleSheet = new ServerStyleSheet();

  const markup = renderToString(styleSheet.collectStyles(<App />));

  const styleTags = styleSheet.getStyleTags();
  const scriptTags = `<script data-chunk="clientAppEntrypoint" src="/static/clientAppEntrypoint.js"></script>`;

  styleSheet.seal();

  res.write(`<head>${styleTags}</head><body>`);
  res.write(`<div id="root">${markup}</div>`);

  res.write(scriptTags);
  res.write('</body></html>');
  res.send();
}

export default serverRender;
