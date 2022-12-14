import React from 'react';
import loadable from '@loadable/component';

const LoadableButton = loadable(() => import('./Button'), {
  fallback: <div>loading button...</div>,
});

const LoadableContent = loadable(() => import('app2/Content'), {
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
        <h1>Module Federation Example: Server Side Rendering</h1>

        <h2>This is the App 1 application.</h2>

        <p>You can try to disable JavaScript and reload the page.</p>
      </div>

      <div style={{ padding: '1rem' }}>
        <h3>Type something into this input</h3>
        <input
          type="text"
          value={state}
          onChange={e => setState(e.target.value)}
          placeholder="Luke, I am your father..."
        />
      </div>

      <div style={{ padding: '1rem' }}>
        <LoadableButton label="Loadable Button" />
      </div>

      <div style={{ padding: '1rem' }}>
        <LoadableContent content={state} />
      </div>
    </div>
  );
};

export default App;
