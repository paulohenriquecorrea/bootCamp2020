import React, { useState, useEffect } from 'react';
import api from './services/api';
import './App.css';
import Header from './components/Header';

// import backgroundImage from './assets/background.jpg';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProjects() {
    // projects.push(`Novo Projeto ${Date.now()}`);
    // setProjects([...projects, `Novo Projeto ${Date.now()}`]);

    const response = await api.post('/projects', {
      title: `Projeto API ${Date.now()}`,
      owner: 'Front',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }
  return (
    <>
      <Header title="Homepage">
        {/* <img width={300} src={backgroundImage} alt="" />  */}
        <ul>
          <li>Project</li>
          <li>Info</li>
          <li>Login</li>
        </ul>
      </Header>

      <Header title="Project" />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.title} - {project.owner}
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProjects}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
