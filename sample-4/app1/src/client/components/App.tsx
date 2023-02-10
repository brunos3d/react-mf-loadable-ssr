import React from 'react';
import loadable from '@loadable/component';

const LazyButton = loadable(() => import('./Button'), {
  fallback: <div>loading button...</div>,
});

const LazyContent = loadable(() => import('app2/Content'), {
  fallback: <div>loading content...</div>,
});

const App = () => {
  const [state, setState] = React.useState<string>('');

  return (
    <div
      style={{
        padding: '1rem',
        borderRadius: '0.25rem',
        border: '4px dashed #fc451e',
      }}
    >
      <div style={{ padding: '1rem' }}>
        <h1>Component Federation + Loadable Adapters (Sample 4)</h1>

        <p>This application consumes the Content component from app2 using Module Federation</p>

        <h2>This is the App 1 application.</h2>

        <p>It was rendered on the server and hydrated on the client.</p>

        <p>You can try to disable JavaScript and reload the page.</p>
      </div>

      <div style={{ padding: '1rem' }}>
        <h3>Button click will work if JavaScript is enabled</h3>

        <LazyButton label="Click me!" onClick={() => alert('dynamic button clicked')} />
      </div>

      <div style={{ padding: '1rem' }}>
        <h3>Type something into this input</h3>
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="Luke, I am your father..." />
      </div>

      <div style={{ padding: '1rem' }}>
        <LazyContent content={state} />
      </div>
    </div>
  );
};

export default App;
