import Nav from './includes/Nav';
import Header from './includes/Header';
import Footer from './includes/Footer';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import AppStart from './AppStart';

const root = ReactDOM.createRoot(document.getElementById('body'));
root.render(
  <React.StrictMode>
    <Nav />
    <main>
      <Header />
      <AppStart />
    </main>
    <Footer />
  </React.StrictMode>
);
