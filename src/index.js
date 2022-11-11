// i didn't use this code because i fell confort from old code

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// My Code is Here !!
// importing things here

import React from "react";//importing react from node
import { ReactDOM } from "react";//importing react-dom from node
import "./index.css";//importing css for styling
import App from "./App";//importing app from app.jsx

ReactDOM.render(//using render function for display things in window
   <>{/*Fragment of react*/}
    <App />{/*App component*/}
  </>,
  document.getElementById("root")//get element by id that present in public folder in index.html
);
