import path from 'path';
import { ChunkExtractor } from '@loadable/server';
import { renderAndExtractContext } from './renderAndExtractContext';

async function serverRender(req, res) {
  const clientExtractor = new ChunkExtractor({
    statsFile: path.resolve(path.join(process.cwd(), 'dist/client'), 'loadable-stats.json'),
    entrypoints: ['clientAppEntrypoint'],
  });

  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.write('<!DOCTYPE html>');
  res.write('<html>');

  const { markup, linkTags, styleTags, scriptTags } = await renderAndExtractContext({
    chunkExtractor: clientExtractor,
  });

  res.write(`<head>${linkTags}${styleTags}</head><body>`);
  res.write(`<div id="root">${markup}</div>`);

  res.write(scriptTags);
  res.write('</body></html>');
  res.send();
}

export default serverRender;
