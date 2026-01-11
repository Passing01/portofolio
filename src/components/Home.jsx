import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Certificates from './Certificates';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Resume />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;
