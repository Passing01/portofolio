import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                        {t('contact.title')}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        {t('contact.subtitle')}
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem'
                }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Informations</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '50px', height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--glass-bg)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--accent-primary)',
                                    fontSize: '1.2rem'
                                }}>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t('contact.email_label')}</div>
                                    <div>ouerahim456@gmail.com</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '50px', height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--glass-bg)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--accent-primary)',
                                    fontSize: '1.2rem'
                                }}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t('contact.location_label')}</div>
                                    <div>Ouagadougou, Burkina Faso</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel"
                        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{t('contact.form.name')}</label>
                            <input
                                type="text"
                                placeholder={t('contact.form.name_placeholder')}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--glass-border)',
                                    backgroundColor: 'var(--glass-bg)',
                                    color: 'var(--text-primary)',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email</label>
                            <input
                                type="email"
                                placeholder={t('contact.form.email_placeholder')}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--glass-border)',
                                    backgroundColor: 'var(--glass-bg)',
                                    color: 'var(--text-primary)',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{t('contact.form.message')}</label>
                            <textarea
                                rows="4"
                                placeholder={t('contact.form.message_placeholder')}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--glass-border)',
                                    backgroundColor: 'var(--glass-bg)',
                                    color: 'var(--text-primary)',
                                    fontSize: '1rem',
                                    resize: 'vertical'
                                }}
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                padding: '1rem',
                                backgroundColor: 'var(--accent-primary)',
                                color: 'white',
                                borderRadius: '0.5rem',
                                fontWeight: '600',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                            }}
                        >
                            <FaPaperPlane /> {t('contact.form.send')}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
