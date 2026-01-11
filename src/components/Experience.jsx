import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Experience = () => {
    const { t, language } = useLanguage();
    const experiences = translations[language]?.resumePage?.exp_items || [];

    return (
        <section id="experience" className="section-padding">
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                        {language === 'fr' ? 'Mon Parcours' : 'My Experience'}
                    </h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-primary)', margin: '0 auto' }}></div>
                </motion.div>

                <div style={{ position: 'relative', borderLeft: '2px solid var(--glass-border)', paddingLeft: '2rem', marginLeft: '1rem' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            style={{ marginBottom: '4rem', position: 'relative' }}
                        >
                            {/* Dot on timeline */}
                            <div style={{
                                position: 'absolute',
                                left: '-2.6rem',
                                top: '0.5rem',
                                width: '1.2rem',
                                height: '1.2rem',
                                borderRadius: '50%',
                                backgroundColor: 'var(--accent-primary)',
                                boxShadow: '0 0 10px var(--accent-primary)'
                            }}></div>

                            <div className="glass-panel" style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem', gap: '1rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{exp.role}</h3>
                                        <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-secondary)', marginTop: '0.5rem' }}>{exp.company}</h4>
                                    </div>
                                    <span style={{
                                        padding: '0.5rem 1rem',
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        height: 'fit-content',
                                        border: '1px solid var(--glass-border)'
                                    }}>
                                        {exp.period}
                                    </span>
                                </div>

                                <p style={{ marginBottom: '1.5rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                                    {exp.description}
                                </p>

                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {exp.achievements && exp.achievements.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'start', gap: '0.8rem' }}>
                                            <span style={{ color: 'var(--accent-primary)', marginTop: '0.4rem' }}>▹</span>
                                            <span style={{ color: 'var(--text-primary)', opacity: 0.9, lineHeight: '1.6' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
