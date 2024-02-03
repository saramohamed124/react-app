import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css'
import App from './App';
import Header from './Header';

// version 18

// creatRoot => make root in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

//  ReactDOM.render وصلت في الاخر ل

root.render(
  <div><App /><Header /></div>
);

// another version
// ReactDOM.render(<div>H</div>,document.getElementById("root"))
