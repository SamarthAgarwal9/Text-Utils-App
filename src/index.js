import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Sammy',
//   lastName: 'Garg'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );
//const element1 = <a href="https://www.reactjs.org"> link </a>;
//const title = response.potentiallyMaliciousInput;
// This is safe:
//const element2 = <h1>{title}</h1>;
ReactDOM.render(
  <React.StrictMode>
       <App />
     </React.StrictMode>,
   //element1,
   //element,
   //element2,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
