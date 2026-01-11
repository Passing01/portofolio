import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FaFileDownload, FaEye } from 'react-icons/fa';

const Resume = () => {
    const { t } = useLanguage();

    return (
        <section id="resume" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                        {t('resume.title')}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        {t('resume.subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel"
                    style={{
                        padding: '3rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2rem'
                    }}
                >
                    <div style={{
                        width: '100px',
                        height: '120px',
                        backgroundColor: 'var(--glass-border)',
                        borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem',
                        color: 'var(--accent-primary)',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                        CV
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Passing Abdoul Rahim OUEDRAOGO</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Full Stack Developer & Computer Vision Engineer</p>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {/* 
                    INSTRUCTIONS POUR L'UTILISATEUR:
                    1. Mettez votre fichier PDF (ex: 'mon_cv.pdf') dans le dossier 'public'
                    2. Remplacez le href ci-dessous par "/mon_cv.pdf" 
                */}
                        <a
                            href="Passing-Abdoul-Rahim-OUEDRAOGO-CV.pdf" // Remplacez par le lien réel de votre CV
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '1rem 2rem',
                                backgroundColor: 'var(--accent-primary)',
                                color: 'white',
                                borderRadius: '50px',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <FaFileDownload /> {t('resume.download')}
                        </a>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
