import Nav from './includes/Nav';
import Header from './includes/Header';
import Footer from './includes/Footer';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import LoginApp from './LoginApp';

const root = ReactDOM.createRoot(document.getElementById('body'));
root.render(
  <React.StrictMode>
    <Nav />
    <main>
      <Header />
      <LoginApp />
    </main>
    <Footer />
  </React.StrictMode>
);
