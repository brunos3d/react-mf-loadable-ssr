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
        <h1>Basic Component Federation (Sample 3)</h1>

        <p>This application exposes the Content component using Module Federation</p>

        <h2>This is the App 2 application.</h2>

        <p>It was rendered on the server and hydrated on the client.</p>

        <p>You can try to disable JavaScript and reload the page.</p>
      </div>
    </div>
  );
};

export default App;
