import React from 'react';

import Button from './Button';
import Content from './Content';

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
        <h1>Basic Server Side Rendering (Sample 1)</h1>

        <h2>This is the App 1 application.</h2>

        <p>It was rendered on the server and hydrated on the client.</p>

        <p>You can try to disable JavaScript and reload the page.</p>
      </div>

      <div style={{ padding: '1rem' }}>
        <h3>Button click will work if JavaScript is enabled</h3>

        <Button label="Click me!" onClick={() => alert('dynamic button clicked')} />
      </div>

      <div style={{ padding: '1rem' }}>
        <h3>Type something into this input</h3>
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="Luke, I am your father..." />
      </div>

      <div style={{ padding: '1rem' }}>
        <Content content={state} />
      </div>
    </div>
  );
};

export default App;
