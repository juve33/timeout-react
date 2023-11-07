import Layout from './layouts';

import React from 'react';
import ReactDOM from 'react-dom/client';
import AppStart from './AppStart';

const root = ReactDOM.createRoot(document.getElementById('body'));
root.render(
  <React.StrictMode>
    <Layout>
      <AppStart />
    </Layout>
  </React.StrictMode>
);
