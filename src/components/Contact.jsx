import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { t } = useLanguage();
    const form = useRef();
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        // Utilisation des variables d'environnement pour la sécurité
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            setStatus({ type: 'error', message: 'Erreur de configuration EmailJS. Vérifiez votre fichier .env' });
            setIsSubmitting(false);
            return;
        }

        emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            form.current,
            PUBLIC_KEY
        )
            .then((result) => {
                setStatus({ type: 'success', message: t('contact.form.success') });
                form.current.reset();
            }, (error) => {
                setStatus({ type: 'error', message: t('contact.form.error') });
                console.error('EmailJS Error:', error);
            })
            .finally(() => {
                setIsSubmitting(false);
                // Effacer le message après 5 secondes
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            });
    };

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
                    {/* Infos de Contact */}
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

                    {/* Formulaire de Contact */}
                    <motion.form
                        ref={form}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel"
                        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
                        onSubmit={sendEmail}
                    >
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{t('contact.form.name')}</label>
                            <input
                                type="text"
                                name="user_name"
                                required
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
                                name="user_email"
                                required
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
                                name="message"
                                required
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

                        <AnimatePresence>
                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    style={{
                                        padding: '0.8rem',
                                        borderRadius: '0.5rem',
                                        backgroundColor: status.type === 'success' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                                        color: status.type === 'success' ? '#4caf50' : '#f44336',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    {status.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                                    {status.message}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            style={{
                                padding: '1rem',
                                backgroundColor: isSubmitting ? 'var(--text-secondary)' : 'var(--accent-primary)',
                                color: 'white',
                                borderRadius: '0.5rem',
                                fontWeight: '600',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {isSubmitting ? (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    style={{ width: '20px', height: '20px', border: '2px solid white', borderTop: '2px solid transparent', borderRadius: '50%' }}
                                />
                            ) : (
                                <FaPaperPlane />
                            )}
                            <span>{isSubmitting ? 'Envoi...' : t('contact.form.send')}</span>
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
