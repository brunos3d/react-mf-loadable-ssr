import React from 'react';
import loadable from '@loadable/component';

const LazyButton = loadable(() => import('./Button'), {
  fallback: <div>loading button...</div>,
});

const LazyContent = loadable(() => import('./Content'), {
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
        <h1>Lazy loading with loadable (Sample 2)</h1>

        <p>
          Loadable was added to this sample, now the Button and the Content component are splitted into separated chunks and dynamic loaded into the
          application but keeping it SSR.
        </p>

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
