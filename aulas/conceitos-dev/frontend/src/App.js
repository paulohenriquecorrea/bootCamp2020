import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import backgroundImage from './assets/background.jpg';

function App() {
  const [projects, setProjects] = useState([
    'Desenvolvimento de app',
    'Front-end web',
  ]);

  function handleAddProjects() {
    // projects.push(`Novo Projeto ${Date.now()}`);

    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    console.log(projects);
  }
  return (
    <>
      <Header title="Homepage">
        <img width={300} src={backgroundImage} alt="" />
        <ul>
          <li>Project</li>
          <li>Info</li>
          <li>Login</li>
        </ul>
      </Header>

      <Header title="Project" />
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProjects}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
