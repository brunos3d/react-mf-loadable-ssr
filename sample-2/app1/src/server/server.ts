import path from 'path';
import express from 'express';

import render from './serverRender';

const app = express();
const PORT = 3000;

// static path where files such as images and js will be served from
app.use('/static', express.static(path.join(process.cwd(), 'dist/client')));

app.get('/', render);

app.listen(PORT, () => {
  console.info(`[${new Date().toISOString()}]`, `App1 is running: 🌎 http://localhost:${PORT}`);
});

export default app;
