import React from 'react';

const App = () => {
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

        <h2>This is the App 2 application.</h2>

        <p>It was rendered on the server and hydrated on the client.</p>

        <p>You can try to disable JavaScript and reload the page.</p>
      </div>
    </div>
  );
};

export default App;
