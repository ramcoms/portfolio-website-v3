import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import ProjectSection from './components/ProjectSection';
import Card from './components/Card';
import ProjectData from './components/ProjectData';

const App = () => {
  const projectDetails = ProjectData.map((project, index) => {
    return (
      <Card
        key={index}
        name={project.name}
        description={project.description}
        link={project.link}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <div className='main'>
        <Intro />
        <ProjectSection />
        <div className='project--section'>{projectDetails}</div>
      </div>
    </div>
  );
};

export default App;
