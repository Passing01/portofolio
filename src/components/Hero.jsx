import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px' // Offset for fixed navbar
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '300px',
                height: '300px',
                background: 'var(--accent-primary)',
                borderRadius: '50%',
                filter: 'blur(100px)',
                opacity: 0.2,
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '20%',
                width: '400px',
                height: '400px',
                background: 'var(--accent-secondary)',
                borderRadius: '50%',
                filter: 'blur(100px)',
                opacity: 0.15,
                zIndex: -1
            }} />

            <div className="section-padding" style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>
                        {t('hero.greeting')}
                    </h2>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        lineHeight: 1.1,
                        marginBottom: '1rem',
                        maxWidth: '1200px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        <span className="gradient-text">{t('hero.name')}</span>
                    </h1>
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        fontWeight: '600',
                        marginBottom: '1.5rem',
                        color: 'var(--text-primary)'
                    }}>
                        {t('hero.title')} | <span style={{ color: 'var(--accent-primary)' }}>{t('hero.subtitle')}</span>
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '700px',
                        margin: '0 auto 2.5rem'
                    }}>
                        {t('hero.description')}
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '1rem 2rem',
                                backgroundColor: 'var(--accent-primary)',
                                color: 'white',
                                borderRadius: '50px',
                                fontWeight: '600',
                                fontSize: '1rem',
                                border: 'none',
                                boxShadow: '0 4px 15px rgba(100, 108, 255, 0.3)'
                            }}
                        >
                            {t('hero.cta_projects')}
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '1rem 2rem',
                                backgroundColor: 'transparent',
                                color: 'var(--text-primary)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '50px',
                                fontWeight: '600',
                                fontSize: '1rem'
                            }}
                        >
                            {t('hero.cta_contact')}
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
