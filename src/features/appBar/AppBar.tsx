import React, { FC } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppBar: FC = () => {
  return (
    <div>
      <Alert key="danger" variant="danger">
        You need to run The
        <a href="https://github.com/mehradi-github/blog-server" target="blank">
          <span> &quot;blog-server&quot;</span>
        </a>
      </Alert>
      {/* 
      <h2>Menu:</h2>
      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>*/}
    </div>
  );
};
export default AppBar;
