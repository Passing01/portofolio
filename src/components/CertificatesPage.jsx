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
                    {certs.map((cert, index) => {
                        const isLink = cert.pdf || cert.image;
                        const CardComponent = isLink ? motion.a : motion.div;

                        return (
                            <CardComponent
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
                                    overflow: 'hidden',
                                    cursor: isLink ? 'pointer' : 'default',
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}
                                href={isLink ? (cert.pdf || cert.image) : undefined}
                                target={isLink ? "_blank" : undefined}
                                rel={isLink ? "noopener noreferrer" : undefined}
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
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: '800', lineHeight: '1.3' }}>{cert.title}</h3>
                                        <div style={{
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            fontSize: '0.85rem',
                                            color: 'var(--accent-secondary)',
                                            fontWeight: 'bold',
                                            marginTop: '0.5rem'
                                        }}>
                                            {cert.issuer}
                                        </div>
                                    </div>

                                    <p style={{ color: 'var(--text-primary)', opacity: 0.9, lineHeight: '1.6' }}>
                                        {cert.description}
                                    </p>

                                    <div style={{
                                        marginTop: 'auto',
                                        paddingTop: '1.5rem',
                                        borderTop: '1px solid var(--glass-border)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            <FaCalendarAlt /> {cert.date}
                                        </div>

                                        <div style={{
                                            background: 'var(--glass-bg)',
                                            border: '1px solid var(--accent-primary)',
                                            color: 'var(--accent-primary)',
                                            padding: '0.5rem 1.2rem',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                            className="view-btn">
                                            {cert.pdf ? 'Ouvrir le PDF' : 'Voir le Certificat'} <FaFileDownload />
                                        </div>
                                    </div>
                                </div>
                            </CardComponent>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default CertificatesPage;
