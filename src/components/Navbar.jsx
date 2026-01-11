import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBars, FaTimes, FaSun, FaMoon, FaGlobe } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();

    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Helper to handle navigation
    const handleNav = (e, href) => {
        e.preventDefault();
        // If it's the resume link, just go there
        if (href === '/cv') {
            navigate('/cv');
            setIsOpen(false);
            return;
        }

        // If it's a hash link
        if (href.startsWith('#')) {
            // If we are not on home, go home first then scroll
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.querySelector(href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                // Just scroll
                const element = document.querySelector(href);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    const navLinks = [
        { title: t('nav.home'), href: '#home' },
        { title: t('nav.about'), href: '#about' },
        { title: t('nav.skills'), href: '#skills' },
        { title: language === 'fr' ? 'Expérience' : 'Experience', href: '#experience' },
        { title: t('nav.projects'), href: '#projects' },
        { title: t('nav.certificates'), href: '#certificates' }, // Added
        { title: t('nav.resume'), href: '/cv' },
        { title: t('nav.contact'), href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                backdropFilter: 'blur(10px)',
                backgroundColor: theme === 'dark' ? 'rgba(10, 10, 10, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                borderBottom: '1px solid var(--glass-border)'
            }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 10%',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', marginRight: '2rem' }}>
                    <FaCode color="var(--accent-primary)" />
                    <span className="gradient-text">DevRahim</span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            onClick={(e) => handleNav(e, link.href)}
                            style={{ fontSize: '0.9rem', fontWeight: '600' }}
                            className="nav-link"
                        >
                            {link.title}
                        </a>
                    ))}

                    <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--text-secondary)' }}></div>

                    <button onClick={toggleTheme} style={{ background: 'none', color: 'var(--text-primary)', fontSize: '1.2rem' }}>
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>

                    <button
                        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                        style={{
                            background: 'none',
                            color: 'var(--text-primary)',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.3rem'
                        }}
                    >
                        <FaGlobe /> {language.toUpperCase()}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {/* Mobile Theme Toggle */}
                    <button onClick={toggleTheme} style={{ background: 'none', color: 'var(--text-primary)', fontSize: '1.2rem' }}>
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>

                    <div onClick={toggleMenu} style={{ fontSize: '1.5rem', cursor: 'pointer' }}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    style={{
                        backgroundColor: 'var(--bg-secondary)',
                        position: 'absolute',
                        width: '100%',
                        borderBottom: '1px solid var(--glass-border)',
                        overflow: 'hidden'
                    }}
                >
                    <ul style={{ padding: '2rem', textAlign: 'center' }}>
                        {navLinks.map((link) => (
                            <li key={link.title} style={{ marginBottom: '1.5rem' }}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNav(e, link.href)}
                                    style={{ fontSize: '1.2rem' }}
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                        <li style={{ marginTop: '1.5rem' }}>
                            <button
                                onClick={() => {
                                    setLanguage(language === 'fr' ? 'en' : 'fr');
                                    toggleMenu();
                                }}
                                style={{
                                    background: 'var(--bg-primary)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    color: 'var(--text-primary)',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    border: '1px solid var(--glass-border)'
                                }}
                            >
                                Change Language: {language === 'fr' ? 'EN' : 'FR'}
                            </button>
                        </li>
                    </ul>
                </motion.div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }
        .nav-link:hover {
          color: var(--accent-primary);
        }
      `}</style>
        </motion.nav>
    );
};

export default Navbar;
