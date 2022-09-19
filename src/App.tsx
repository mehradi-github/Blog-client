import React, { Fragment } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Posts from './features/posts/Posts';

function App() {
  return (
    // <Fragment>
    //   <Routes>
    //     <Route path="/posts" element={<Posts />} />
    //     {/* <Route path="/posts" element={Signup} />
    //     <Route path="/posts" element={Signin} />
    //     <Route path="/posts" element={Profile} /> */}
    //   </Routes>

    //   {/* <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <Counter />
    //       <p>
    //         Edit <code>src/App.tsx</code> and save to reload.
    //       </p>
    //       <span>
    //         <span>Learn </span>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           React
    //         </a>
    //         <span>, </span>
    //         <a
    //           className="App-link"
    //           href="https://redux.js.org/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Redux
    //         </a>
    //         <span>, </span>
    //         <a
    //           className="App-link"
    //           href="https://redux-toolkit.js.org/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Redux Toolkit
    //         </a>
    //         ,<span> and </span>
    //         <a
    //           className="App-link"
    //           href="https://react-redux.js.org/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           React Redux
    //         </a>
    //       </span>
    //     </header>
    //   </div> */}

    // </Fragment>
    <Posts />
  );
}

export default App;
