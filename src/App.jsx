import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ResumePage from './components/ResumePage';
import CertificatesPage from './components/CertificatesPage';
import SynodCaseStudy from './components/SynodCaseStudy';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cv" element={<ResumePage />} />
              <Route path="/certificates" element={<CertificatesPage />} />
              <Route path="/synod-case-study" element={<SynodCaseStudy />} />
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
