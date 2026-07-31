import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaServer, FaCodeBranch, FaDatabase, FaShieldAlt, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const SynodCaseStudy = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    return (
        <div style={{ paddingTop: '100px', paddingBottom: '5rem', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 5%' }}>
                
                <button 
                    onClick={() => navigate('/')} 
                    style={{ 
                        background: 'transparent', 
                        border: 'none', 
                        color: 'var(--accent-primary)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        marginBottom: '2rem',
                        fontWeight: 'bold'
                    }}
                >
                    <FaArrowLeft /> {t('synodCaseStudy.back')}
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-panel"
                    style={{ padding: '3rem', borderRadius: '15px' }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                            <span className="gradient-text">SYNOD AI</span>
                        </h1>
                        <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                            {t('synodCaseStudy.subtitle')}
                        </h2>
                    </div>

                    {/* Vision Section */}
                    <section style={{ marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '700', borderBottom: '2px solid var(--accent-primary)', display: 'inline-block', marginBottom: '1.5rem' }}>
                            {t('synodCaseStudy.vision_title')}
                        </h3>
                        <p 
                            style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}
                            dangerouslySetInnerHTML={{ __html: t('synodCaseStudy.vision_desc') }}
                        />
                    </section>

                    {/* Architecture Section */}
                    <section style={{ marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '700', borderBottom: '2px solid var(--accent-primary)', display: 'inline-block', marginBottom: '1.5rem' }}>
                            {t('synodCaseStudy.arch_title')}
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                            <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <FaBrain style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '1rem' }} />
                                <h4>{t('synodCaseStudy.agent1_title')}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('synodCaseStudy.agent1_desc')}</p>
                            </div>
                            <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <FaShieldAlt style={{ fontSize: '2.5rem', color: '#FF6B6B', marginBottom: '1rem' }} />
                                <h4>{t('synodCaseStudy.agent2_title')}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('synodCaseStudy.agent2_desc')}</p>
                            </div>
                            <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <FaCodeBranch style={{ fontSize: '2.5rem', color: '#4ECDC4', marginBottom: '1rem' }} />
                                <h4>{t('synodCaseStudy.agent3_title')}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('synodCaseStudy.agent3_desc')}</p>
                            </div>
                        </div>
                    </section>

                    {/* Stack Technique Section */}
                    <section style={{ marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '700', borderBottom: '2px solid var(--accent-primary)', display: 'inline-block', marginBottom: '1.5rem' }}>
                            {t('synodCaseStudy.stack_title')}
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <FaServer style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginTop: '0.2rem' }} />
                                <div dangerouslySetInnerHTML={{ __html: t('synodCaseStudy.stack_orchestration') }} />
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <FaBrain style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginTop: '0.2rem' }} />
                                <div dangerouslySetInnerHTML={{ __html: t('synodCaseStudy.stack_inference') }} />
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <FaDatabase style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginTop: '0.2rem' }} />
                                <div dangerouslySetInnerHTML={{ __html: t('synodCaseStudy.stack_storage') }} />
                            </li>
                        </ul>
                    </section>

                    {/* Strategie Section */}
                    <section>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '700', borderBottom: '2px solid var(--accent-primary)', display: 'inline-block', marginBottom: '1.5rem' }}>
                            {t('synodCaseStudy.strategy_title')}
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
                            {t('synodCaseStudy.strategy_desc')}
                        </p>
                        <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '10px' }}>
                            <ul style={{ color: 'var(--text-primary)', lineHeight: '2' }}>
                                <li dangerouslySetInnerHTML={{ __html: t('synodCaseStudy.grade1') }} />
                                <li dangerouslySetInnerHTML={{ __html: t('synodCaseStudy.grade2') }} />
                                <li dangerouslySetInnerHTML={{ __html: t('synodCaseStudy.grade3') }} />
                                <li dangerouslySetInnerHTML={{ __html: t('synodCaseStudy.grade4') }} />
                            </ul>
                        </div>
                    </section>

                </motion.div>
            </div>
        </div>
    );
};

export default SynodCaseStudy;
