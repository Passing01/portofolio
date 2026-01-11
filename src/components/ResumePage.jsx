import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const ResumePage = () => {
    const { t, language } = useLanguage();
    const data = t('resumePage'); // Access the structured data

    // Helper to safely get arrays from translations
    const getArray = (key) => {
        const val = data[key];
        return Array.isArray(val) ? val : [];
    };

    const expItems = getArray('exp_items');
    const eduItems = getArray('edu_items');
    const langs = getArray('langs');
    const hobbies = getArray('hobbies');

    return (
        <div style={{ paddingTop: '100px', paddingBottom: '5rem', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 5%' }}>

                {/* Header Actions */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="/Passing-Abdoul-Rahim-OUEDRAOGO-CV.pdf"
                        target="_blank"
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            backgroundColor: 'var(--accent-primary)', color: 'white',
                            padding: '0.8rem 1.5rem', borderRadius: '50px', fontWeight: 'bold'
                        }}
                    >
                        <FaFileDownload /> {data.download}
                    </motion.a>
                </div>

                {/* Resume Sheet */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-panel"
                    style={{
                        padding: '3rem',
                        backgroundColor: 'var(--bg-secondary)', // Slightly different from bg to pop
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                        borderRadius: '10px' // Sharper corners for paper feel? Or stick to 20px
                    }}
                >
                    {/* CV Header */}
                    <div style={{ borderBottom: '2px solid var(--glass-border)', paddingBottom: '2rem', marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
                        <div>
                            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                                Passing Abdoul Rahim <br />
                                <span className="gradient-text">OUEDRAOGO</span>
                            </h1>
                            <h2 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', fontWeight: '600', letterSpacing: '1px' }}>
                                FULL STACK DEVELOPER & COMPUTER VISION
                            </h2>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><FaEnvelope /> contact@monsite.com</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><FaMapMarkerAlt /> Paris, France</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><FaGlobe /> www.portfolio.com</div>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', fontSize: '1.2rem' }}>
                                <FaLinkedin style={{ cursor: 'pointer', color: 'var(--text-primary)' }} />
                                <FaGithub style={{ cursor: 'pointer', color: 'var(--text-primary)' }} />
                            </div>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                        {/* Left Column (Main) */}
                        <div>
                            {/* Summary */}
                            <section style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', borderBottom: '2px solid var(--accent-primary)', display: 'inline-block', marginBottom: '1rem', paddingBottom: '0.3rem' }}>
                                    {data.summary_title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                    {data.summary_text}
                                </p>
                            </section>

                            {/* Experience */}
                            <section style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', borderBottom: '2px solid var(--accent-primary)', display: 'inline-block', marginBottom: '1.5rem', paddingBottom: '0.3rem' }}>
                                    {data.experience_title}
                                </h3>

                                {expItems.length > 0 && expItems.map((job, i) => (
                                    <div key={i} style={{ marginBottom: '2rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                            <h4 style={{ fontWeight: '700', fontSize: '1.1rem' }}>{job.role}</h4>
                                            <span style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', fontWeight: '600' }}>{job.period}</span>
                                        </div>
                                        <div style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontStyle: 'italic' }}>
                                            {job.company}
                                        </div>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                            {job.description}
                                        </p>
                                        <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                            {job.achievements && job.achievements.map((ach, j) => (
                                                <li key={j} style={{ marginBottom: '0.3rem' }}>{ach}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </section>

                        </div>

                        {/* Right Column (Side) */}
                        <div>
                            {/* Skills */}
                            <section style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', borderBottom: '2px solid var(--accent-primary)', display: 'inline-block', marginBottom: '1.5rem', paddingBottom: '0.3rem' }}>
                                    {data.skills_title}
                                </h3>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div>
                                        <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>BACKEND</strong>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {['Laravel', 'Django', 'Ruby on Rails', 'Node.js'].map(s => (
                                                <span key={s} style={{ fontSize: '0.8rem', backgroundColor: 'var(--glass-border)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>FRONTEND</strong>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {['React JS', 'TypeScript', 'Tailwind', 'Vite'].map(s => (
                                                <span key={s} style={{ fontSize: '0.8rem', backgroundColor: 'var(--glass-border)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>MOBILE</strong>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {['React Native', 'Flutter'].map(s => (
                                                <span key={s} style={{ fontSize: '0.8rem', backgroundColor: 'var(--glass-border)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>AI & DATA</strong>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {['Computer Vision', 'OpenCV', 'Python'].map(s => (
                                                <span key={s} style={{ fontSize: '0.8rem', backgroundColor: 'var(--glass-border)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Education */}
                            <section style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', borderBottom: '2px solid var(--accent-primary)', display: 'inline-block', marginBottom: '1.5rem', paddingBottom: '0.3rem' }}>
                                    {data.education_title}
                                </h3>
                                {eduItems.length > 0 && eduItems.map((edu, k) => (
                                    <div key={k} style={{ marginBottom: '1.5rem' }}>
                                        <div style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{edu.degree}</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{edu.school}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)' }}>{edu.year}</div>
                                    </div>
                                ))}
                            </section>

                            {/* Languages */}
                            <section>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', borderBottom: '2px solid var(--accent-primary)', display: 'inline-block', marginBottom: '1.5rem', paddingBottom: '0.3rem' }}>
                                    {data.languages_title}
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {langs.length > 0 && langs.map((lang, l) => (
                                        <li key={l} style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>• {lang}</li>
                                    ))}
                                </ul>
                            </section>

                        </div>
                    </div>

                    {/* Media Query for Mobile Layout */}
                    <style>{`
                        @media (max-width: 768px) {
                            div[style*="grid-template-columns"] {
                                grid-template-columns: 1fr !important;
                            }
                        }
                    `}</style>

                </motion.div>
            </div>
        </div>
    );
};

export default ResumePage;
