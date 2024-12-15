import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1>John Doe</h1>
        <h2 className="text-muted">Web Developer</h2>
        <p>
          <strong>Email:</strong> johndoe@example.com | <strong>Phone:</strong> +123 456 7890
        </p>
        <p>
          <strong>Website:</strong> 
          <a href="https://johnndoe.dev" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>johndoe.dev</a> | 
          <strong> LinkedIn:</strong> 
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>linkedin.com/in/johndoe</a>
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-4">
        <h2 className="text-primary">Skills</h2>
        <ul className="list-unstyled">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Git/GitHub</li>
        </ul>
      </div>

      {/* Experience Section */}
      <div className="mb-4">
        <h2 className="text-primary">Experience</h2>
        <div className="mb-3">
          <h3>Frontend Developer</h3>
          <h4 className="text-muted">Tech Solutions Inc. | Jan 2022 - Present</h4>
          <ul>
            <li>Developed responsive user interfaces using React and Material-UI.</li>
            <li>Optimized website performance, improving load times by 30%.</li>
            <li>Collaborated with backend developers to integrate RESTful APIs.</li>
          </ul>
        </div>

        <div className="mb-3">
          <h3>Web Developer Intern</h3>
          <h4 className="text-muted">Creative Web Studio | May 2021 - Dec 2021</h4>
          <ul>
            <li>Assisted in designing and coding client websites using HTML, CSS, and JavaScript.</li>
            <li>Created reusable components for a company-wide React library.</li>
            <li>Participated in code reviews and team sprints.</li>
          </ul>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-4">
        <h2 className="text-primary">Projects</h2>
        <div className="mb-3">
          <h3>Portfolio Website</h3>
          <p>Designed and developed a personal portfolio using React, showcasing projects and skills.</p>
          <a href="https://johnndoe.dev" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">View Project</a>
        </div>

        <div className="mb-3">
          <h3>E-commerce Platform</h3>
          <p>Developed a full-stack e-commerce platform with React, Node.js, and MongoDB.</p>
          <a href="https://github.com/johndoe/ecommerce-platform" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">View Project</a>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-4">
        <h2 className="text-primary">Education</h2>
        <div>
          <h3>B.S. in Computer Science</h3>
          <h4 className="text-muted">XYZ University | 2018 - 2022</h4>
        </div>
      </div>
    </div>
  );
}

export default Resume;
