import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaMobileAlt, FaCamera, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiLaravel, SiRubyonrails, SiFlutter, SiOpencv } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

const skills = [
    { name: 'React JS', icon: <FaReact size={40} color="#61DAFB" /> },
    { name: 'React Native', icon: <FaMobileAlt size={40} color="#61DAFB" /> },
    { name: 'Flutter', icon: <SiFlutter size={40} color="#02569B" /> },
    { name: 'Laravel', icon: <SiLaravel size={40} color="#FF2D20" /> },
    { name: 'Django', icon: <SiDjango size={40} color="#092E20" /> },
    { name: 'Ruby on Rails', icon: <SiRubyonrails size={40} color="#CC0000" /> },
    { name: 'Computer Vision', icon: <FaCamera size={40} color="#5C5C5C" /> },
    { name: 'OpenCV', icon: <SiOpencv size={40} color="#5C3EE8" /> },
];

const Skills = () => {
    const { t } = useLanguage();

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

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '2rem',
                    justifyContent: 'center'
                }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                            viewport={{ once: true }}
                            className="glass-panel"
                            style={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                cursor: 'pointer',
                                textAlign: 'center'
                            }}
                        >
                            {skill.icon}
                            <span style={{ fontWeight: '600' }}>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
