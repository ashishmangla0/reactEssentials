// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
 //React.createElement("h1",null,"Heyyyy Everyone"),
 //React.createElement("h1",{style:{color:"blue"}},"Heyyyy Everyone"), 
 React.createElement("ul",null,
 React.createElement("li",null,"Monday"),
 React.createElement("li",null,"Tuesday"),
 React.createElement("li",null,"Wednesday"),
 React.createElement("li",null,"Thursday")
 ),
 document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

