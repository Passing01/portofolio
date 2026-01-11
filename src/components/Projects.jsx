import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Projects = () => {
    const { t, language } = useLanguage();

    const projectsList = translations[language].projects.items;

    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1',
        '#96CEB4', '#FFEEAD', '#D4A5A5',
        '#9B59B6'
    ];

    return (
        <section id="projects" className="section-padding">
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        marginBottom: '3rem',
                        textAlign: 'center'
                    }}
                >
                    {t('projects.title')}
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                    {projectsList.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            className="glass-panel"
                            style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{
                                height: '180px',
                                background: `linear-gradient(45deg, ${colors[index % colors.length]}, #2d3436)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'rgba(255,255,255,0.8)',
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                padding: '1rem',
                                textAlign: 'center',
                                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                            }}>
                                {project.title.substring(0, 1)}
                            </div>

                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '700' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, fontSize: '0.95rem' }}>{project.description}</p>

                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.8rem',
                                            padding: '0.3rem 0.8rem',
                                            borderRadius: '20px',
                                            backgroundColor: 'var(--glass-border)',
                                            color: 'var(--text-primary)'
                                        }}>
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                    {project.link ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 'bold' }}>
                                            <FaExternalLinkAlt /> {t('projects.demo')}
                                        </a>
                                    ) : (
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', opacity: 0.5, cursor: 'not-allowed' }}>
                                            <FaExternalLinkAlt /> {t('projects.demo')}
                                        </span>
                                    )}

                                    {/* GitHub Link */}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-primary)', textDecoration: 'none', opacity: 0.8, transition: 'opacity 0.2s' }} className="github-link">
                                            <FaGithub /> {t('projects.code')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
