import React from 'react';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import { ServerStyleSheet } from 'styled-components';

import App from '../client/components/App';

export type RenderAndExtractContextOptions = {
  chunkExtractor: ChunkExtractor;
};

export type RenderAndExtractContextResult = {
  markup: string;
  linkTags: string;
  styleTags: string;
  scriptTags: string;
};

export type RenderAndExtractContextFunction = (options: RenderAndExtractContextOptions) => Promise<RenderAndExtractContextResult>;

export async function renderAndExtractContext({ chunkExtractor }: RenderAndExtractContextOptions): Promise<RenderAndExtractContextResult> {
  const styleSheet = new ServerStyleSheet();

  const markup = renderToString(styleSheet.collectStyles(chunkExtractor.collectChunks(<App />)));

  const linkTags = chunkExtractor.getLinkTags();

  const styleTags = `${chunkExtractor.getStyleTags()}${styleSheet.getStyleTags()}`;
  const scriptTags = `${chunkExtractor.getScriptTags()}`;

  styleSheet.seal();

  return {
    markup,
    linkTags,
    styleTags,
    scriptTags,
  };
}
