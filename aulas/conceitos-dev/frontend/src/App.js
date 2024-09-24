import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Project</li>
          <li>Info</li>
          <li>Login</li>
        </ul>
      </Header>
      <Header title="Project">
        <ul>
          <li>Apenas 1</li>
        </ul>
      </Header>
    </>
  );
}

export default App;
