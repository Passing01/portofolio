import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer style={{
            backgroundColor: 'var(--bg-primary)',
            padding: '3rem 10%',
            borderTop: '1px solid var(--glass-border)',
            textAlign: 'center'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                marginBottom: '2rem',
                fontSize: '1.5rem'
            }}>
                <a href="https://github.com/Passing01" style={{ color: 'var(--text-secondary)' }} className="social-icon"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/passing-abdoul-rahim-ouedraogo-a32a152b9" style={{ color: 'var(--text-secondary)' }} className="social-icon"><FaLinkedin /></a>
                <a href="https://x.com/ouerahim456" style={{ color: 'var(--text-secondary)' }} className="social-icon"><FaTwitter /></a>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {t('footer.made_with')} <FaHeart color="var(--accent-primary)" style={{ display: 'inline', verticalAlign: '-2px' }} />
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '1rem', opacity: 0.6 }}>
                © {new Date().getFullYear()} {t('footer.rights')}
            </p>

            <style>{`
        .social-icon:hover {
          color: var(--accent-primary) !important;
          transform: translateY(-3px);
          display: inline-block;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
