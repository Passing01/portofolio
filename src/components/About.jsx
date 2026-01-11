import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="section-padding">
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>

                {/* Text Content */}
                <motion.div
                    style={{ flex: 1, minWidth: '300px' }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                        {t('about.title')}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                        {t('about.p1')}
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        {t('about.p2')}
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        {t('about.p3')}
                    </p>
                </motion.div>

                {/* Image/Visual Placeholder */}
                <motion.div
                    style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="glass-panel" style={{
                        width: '300px',
                        height: '300px',
                        borderRadius: '20px',
                        position: 'relative',
                        overflow: 'hidden',
                        border: '2px solid var(--glass-border)'
                    }}>
                        <img
                            src="https://placehold.co/400x400/1a1a1a/FFF?text=Votre+Photo"
                            alt="Photo de profil"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
