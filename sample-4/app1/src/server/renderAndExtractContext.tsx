import React from 'react';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import { ServerStyleSheet } from 'styled-components';

import { app2Remote } from '../config/mf-values';
import { FederatedChunkExtractor } from '@mf/loadable-adapters';

import App from '../client/components/App';

const federatedChunkExtractor = new FederatedChunkExtractor(app2Remote);

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

  await federatedChunkExtractor.collectMfChunks(chunkExtractor);

  const mfStyleTags = federatedChunkExtractor.getStyleTags();
  const mfScriptTags = federatedChunkExtractor.getScriptTags({}, { loadMode: 'defer' });

  const linkTags = chunkExtractor.getLinkTags();

  const styleTags = `${mfStyleTags}${chunkExtractor.getStyleTags()}${styleSheet.getStyleTags()}`;
  const scriptTags = `${mfScriptTags}${chunkExtractor.getScriptTags()}`;

  styleSheet.seal();

  return {
    markup,
    linkTags,
    styleTags,
    scriptTags,
  };
}
