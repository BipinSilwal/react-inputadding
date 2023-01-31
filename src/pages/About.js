import React from 'react';
import Card from '../shared/Card';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Card reverse={true}>
        <div className="about">
          <h1>About this Project</h1>
          <p>This is a React app to leave fee</p>
          <p>Version 1.0.0</p>
        </div>
        <Link to="/">Back to Home</Link>
      </Card>
    </>
  );
};

export default About;
