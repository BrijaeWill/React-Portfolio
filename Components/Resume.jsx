import React from 'react';

function Resume() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '20px', color: '#333', backgroundColor: '#f9f9f9', padding: '20px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ margin: '0' }}>John Doe</h1>
        <h2 style={{ color: '#007bff' }}>Web Developer</h2>
        <p><strong>Email:</strong> johndoe@example.com | <strong>Phone:</strong> +123 456 7890</p>
        <p>
          <strong>Website:</strong> <a href="https://johndoe.dev" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>johndoe.dev</a> | 
          <strong> LinkedIn:</strong> <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>linkedin.com/in/johndoe</a>
        </p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#007bff' }}>Skills</h2>
        <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Git/GitHub</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#007bff' }}>Experience</h2>
        <div>
          <h3>Frontend Developer</h3>
          <h4>Tech Solutions Inc. | Jan 2022 - Present</h4>
          <ul>
            <li>Developed responsive user interfaces using React and Material-UI.</li>
            <li>Optimized website performance, improving load times by 30%.</li>
            <li>Collaborated with backend developers to integrate RESTful APIs.</li>
          </ul>
        </div>
        <div>
          <h3>Web Developer Intern</h3>
          <h4>Creative Web Studio | May 2021 - Dec 2021</h4>
          <ul>
            <li>Assisted in designing and coding client websites using HTML, CSS, and JavaScript.</li>
            <li>Created reusable components for a company-wide React library.</li>
            <li>Participated in code reviews and team sprints.</li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#007bff' }}>Projects</h2>
        <div>
          <h3>Portfolio Website</h3>
          <p>Designed and developed a personal portfolio using React, showcasing projects and skills.</p>
          <a href="https://johndoe.dev" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>View Project</a>
        </div>
        <div>
          <h3>E-commerce Platform</h3>
          <p>Developed a full-stack e-commerce platform with React, Node.js, and MongoDB.</p>
          <a href="https://github.com/johndoe/ecommerce-platform" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>View Project</a>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#007bff' }}>Education</h2>
        <div>
          <h3>B.S. in Computer Science</h3>
          <h4>XYZ University | 2018 - 2022</h4>
        </div>
      </div>
    </div>
  );
}

export default Resume;
