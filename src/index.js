import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter, Route, HashRouter} from 'react-router-dom';

import Resume from './components/resume';
import AboutMe from './components/aboutme';
import HiveMate from './components/hivemate';
import Projects from './components/projects';
import Contact from './components/contact';
import Main from './components/main';

import { Switch } from 'react-mdl';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
    </React.StrictMode>
     , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// registerServiceWorker();