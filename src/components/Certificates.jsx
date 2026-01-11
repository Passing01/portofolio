import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FaAward, FaCalendarAlt, FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { translations } from '../translations';

const Certificates = () => {
    const { t, language } = useLanguage();
    const certs = translations[language].certificates.items.slice(0, 3); // Show only first 3 on preview

    return (
        <section id="certificates" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                        {t('certificates.title')}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        {t('certificates.subtitle')}
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            className="glass-panel"
                            style={{
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: (cert.pdf || cert.image) ? 'pointer' : 'default',
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                            // If it's a link, use 'a', otherwise div
                            as={cert.pdf || cert.image ? "a" : "div"}
                            href={cert.pdf || cert.image}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {/* Image/Preview Area */}
                            <div style={{ width: '100%', height: '200px', backgroundColor: '#2d3436', position: 'relative', overflow: 'hidden' }}>
                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                                    />
                                ) : null}

                                {/* Fallback Icon (shown if no image or error) -> Shows PDF Icon if PDF, else Award */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                    display: cert.image ? 'none' : 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center', justifyContent: 'center',
                                    background: 'linear-gradient(135deg, var(--bg-secondary), var(--glass-border))'
                                }}>
                                    {cert.pdf ? (
                                        <>
                                            <FaFileDownload size={50} color="var(--accent-primary)" />
                                            <span style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.8 }}>View PDF</span>
                                        </>
                                    ) : (
                                        <FaAward size={50} color="var(--accent-secondary)" />
                                    )}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>{cert.title}</h3>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{cert.issuer}</div>
                                <p style={{ fontSize: '0.9rem', flex: 1, color: 'var(--text-secondary)' }}>{cert.description}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', opacity: 0.7, marginTop: 'auto' }}>
                                    <FaCalendarAlt /> {cert.date}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link
                        to="/certificates"
                        style={{
                            padding: '0.8rem 2rem',
                            border: '1px solid var(--accent-primary)',
                            borderRadius: '50px',
                            color: 'var(--accent-primary)',
                            fontWeight: '600'
                        }}
                    >
                        {t('certificates.view_all')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
