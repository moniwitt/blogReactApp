import React from 'react';
import './App.css';

import Posts from './components/Posts/Posts';

const App = () => {
  return (
    <div className="main-container">
      <h1 className="main-heading">Welcome</h1>
      <h2 className="second-heading"> to my Voyage Blog</h2>
      <Posts />
    </div>
  );
};

export default App;
