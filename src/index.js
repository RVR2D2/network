import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const posts = [
  {
    message: 'Test',
    like: 12,
    id: 1
  },
  {
    message: 'Test2',
    like: 1,
    id: 2
  }
];


const dialogs = [
  { id: 1, name: 'Const' },
  { id: 2, name: 'Sass' },
  { id: 3, name: 'Less' }
];

const messages = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'hi' },
  { id: 3, message: 'hi' }
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} dialogs={dialogs} messages={messages}  />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
