import Header from '/Components/header.jsx'
import Footer from '../Components/footer.jsx'
import About from'../Components/About.jsx'
import Contact from'../Components/Contact.jsx'
import Projects from '../Components/project.jsx'
import Resume from '../Components/Resume.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '/Main/App.css'
function App() {
    return (
      <Router>
        <div>
          <Header />
          <main>
            <Routes>
              {/* Define the About Page Route */}
              <Route path="/" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
  
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    );
  }
  
export default App