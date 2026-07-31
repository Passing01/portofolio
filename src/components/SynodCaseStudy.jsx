import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaServer, FaCodeBranch, FaDatabase, FaShieldAlt, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SynodCaseStudy = () => {
    const navigate = useNavigate();

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
                    <FaArrowLeft /> Retour au Portfolio
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
                            Le Protocole de Confiance par Consensus Récursif
                        </h2>
                    </div>

                    {/* Vision Section */}
                    <section style={{ marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '700', borderBottom: '2px solid var(--accent-primary)', display: 'inline-block', marginBottom: '1.5rem' }}>
                            1. Vision & Mission
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            SYNOD AI n'est pas un simple service d'étiquetage de données. C'est une <strong>usine à vérité</strong> qui utilise la compétition entre plusieurs intelligences artificielles pour générer, vérifier et certifier des données d'un niveau de pureté supérieur à l'expertise humaine seule. L'objectif final est de construire une infrastructure IA totalement autonome et souveraine, en utilisant des modèles locaux (Ollama).
                        </p>
                    </section>

                    {/* Architecture Section */}
                    <section style={{ marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '700', borderBottom: '2px solid var(--accent-primary)', display: 'inline-block', marginBottom: '1.5rem' }}>
                            2. L'Architecture de Consensus
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                            <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <FaBrain style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '1rem' }} />
                                <h4>L'Atelier (Agent 1)</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Le Générateur. Il produit la solution initiale, détaillé étape par étape (Chain of Thought).</p>
                            </div>
                            <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <FaShieldAlt style={{ fontSize: '2.5rem', color: '#FF6B6B', marginBottom: '1rem' }} />
                                <h4>La Critique (Agent 2)</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Le Maître Sévère. Cherche les failles, les biais et les hallucinations sans complaisance.</p>
                            </div>
                            <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <FaCodeBranch style={{ fontSize: '2.5rem', color: '#4ECDC4', marginBottom: '1rem' }} />
                                <h4>Le Gouverneur (Agent 3)</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Le Juge. Tranche le débat. Si le consensus n'est pas parfait, la tâche est renvoyée en correction.</p>
                            </div>
                        </div>
                    </section>

                    {/* Stack Technique Section */}
                    <section style={{ marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '700', borderBottom: '2px solid var(--accent-primary)', display: 'inline-block', marginBottom: '1.5rem' }}>
                            3. La Stack Technique
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <FaServer style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginTop: '0.2rem' }} />
                                <div>
                                    <strong>Orchestration IA :</strong> LangGraph (Gestion des boucles "Débat-Correction") et Pydantic pour la validation stricte.
                                </div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <FaBrain style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginTop: '0.2rem' }} />
                                <div>
                                    <strong>Inférence :</strong> Modèles locaux via Ollama, LLMs Open-Source (Llama 3, Mistral) sur Groq pour une vitesse d'inférence fulgurante, et LiteLLM comme gateway.
                                </div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <FaDatabase style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginTop: '0.2rem' }} />
                                <div>
                                    <strong>Stockage & BDD :</strong> PostgreSQL (avec pgvector pour les embeddings), Redis (Task Queue et mémoire à court terme).
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Strategie Section */}
                    <section>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '700', borderBottom: '2px solid var(--accent-primary)', display: 'inline-block', marginBottom: '1.5rem' }}>
                            4. Stratégie de Souveraineté : Le Cycle de Promotion
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
                            Le cœur de l'autonomie du système. L'objectif n'est pas de rester dépendant des APIs propriétaires, mais de les utiliser comme mentors pour éduquer des modèles locaux (le "Petit Frère").
                        </p>
                        <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '10px' }}>
                            <ul style={{ color: 'var(--text-primary)', lineHeight: '2' }}>
                                <li><strong>Grade 1 (Shadow Learning) :</strong> Le modèle local écoute et apprend des débats entre les APIs payantes.</li>
                                <li><strong>Grade 2 (L'Exécutant) :</strong> Le modèle local prend la place de l'Agent 1 (Générateur) et se fait critiquer.</li>
                                <li><strong>Grade 3 (Le Critique) :</strong> Le modèle local devient l'Agent 2 et détecte les erreurs.</li>
                                <li><strong>Grade 4 (Le Gouverneur) :</strong> Autonomie totale. Le modèle local est le juge suprême, 100% souverain et local.</li>
                            </ul>
                        </div>
                    </section>

                </motion.div>
            </div>
        </div>
    );
};

export default SynodCaseStudy;
