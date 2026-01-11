import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCalendarAlt, FaHome, FaFileDownload } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { translations } from '../translations';

const CertificatesPage = () => {
    const { t, language } = useLanguage();
    const certs = translations[language].certificates.items;

    return (
        <div style={{ paddingTop: '100px', paddingBottom: '5rem', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>

                {/* Header Actions */}
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '2rem' }}>
                    <Link
                        to="/"
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            color: 'var(--text-secondary)',
                            fontWeight: '600'
                        }}
                    >
                        <FaHome /> {t('nav.home')}
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                        {t('certificates.title')}
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                        {t('certificates.subtitle')}
                    </p>
                </motion.div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="glass-panel"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid var(--glass-border)',
                                overflow: 'hidden', // Important for image
                                cursor: (cert.pdf || cert.image) ? 'pointer' : 'default',
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                            as={cert.pdf || cert.image ? "a" : "div"}
                            href={cert.pdf || cert.image}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {/* Image Section */}
                            <div style={{ height: '220px', width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#2d3436' }}>
                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                                    />
                                ) : null}

                                {/* Fallback/Overlay */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                    display: cert.image ? 'none' : 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center', justifyContent: 'center',
                                    background: 'linear-gradient(135deg, var(--accent-primary) 0%, rgba(0,0,0,0.8) 100%)',
                                }}>
                                    {cert.pdf ? (
                                        <>
                                            <FaFileDownload size={60} color="white" style={{ opacity: 0.9 }} />
                                            <span style={{ marginTop: '0.5rem', color: 'white', fontWeight: 'bold' }}>PDF</span>
                                        </>
                                    ) : (
                                        <FaAward size={60} color="white" style={{ opacity: 0.8 }} />
                                    )}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{cert.title}</h3>

                                <div style={{ flex: 1 }}>
                                    <div style={{
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        fontSize: '0.8rem',
                                        color: 'var(--accent-secondary)',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {cert.issuer}
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)' }}>
                                        {cert.description}
                                    </p>
                                </div>

                                <div style={{
                                    marginTop: '1.5rem',
                                    paddingTop: '1rem',
                                    borderTop: '1px solid var(--glass-border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.9rem',
                                    opacity: 0.8
                                }}>
                                    <FaCalendarAlt /> {cert.date}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default CertificatesPage;
