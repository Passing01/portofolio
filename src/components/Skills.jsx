import React from 'react';
import { motion } from 'framer-motion';

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Skills = () => {
    const { t, language } = useLanguage();
    const categories = translations[language].skills.categories || [];

    return (
        <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        marginBottom: '1rem'
                    }}>
                        {t('skills.title')}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        {t('skills.subtitle')}
                    </p>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {categories.map((category, index) => (
                        <div key={index}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    marginBottom: '1.5rem',
                                    color: 'var(--accent-primary)',
                                    borderLeft: '4px solid var(--accent-primary)',
                                    paddingLeft: '1rem'
                                }}
                            >
                                {category.name}
                            </motion.h3>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1rem'
                            }}>
                                {category.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        whileHover={{ y: -3, backgroundColor: 'var(--glass-border)' }}
                                        viewport={{ once: true }}
                                        className="glass-panel"
                                        style={{
                                            padding: '0.8rem 1.5rem',
                                            borderRadius: '50px',
                                            fontSize: '0.95rem',
                                            fontWeight: '600',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            border: '1px solid rgba(255,255,255,0.05)'
                                        }}
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
