export const translations = {
    fr: {
        nav: {
            home: 'Accueil',
            about: 'Propos',
            skills: 'Compétences',
            projects: 'Projets',
            resume: 'CV',
            certificates: 'Certificats',
            contact: 'Contact',
        },
        hero: {
            greeting: 'Bonjour, je suis',
            name: 'Passing Abdoul Rahim OUEDRAOGO',
            title: 'Développeur Full Stack',
            subtitle: 'Web & Mobile',
            description: "Spécialisé en React, Laravel, Django, Ruby on Rails et vision par ordinateur. Je transforme des idées complexes en applications performantes.",
            cta_projects: 'Voir mes projets',
            cta_contact: 'Me contacter',
        },
        about: {
            title: 'À propos de moi',
            p1: "Développeur Full Stack passionné, je jongle avec aisance entre le web (React, Laravel, Django, Rails) et le mobile (React Native, Flutter).",
            p2: "Au-delà du développement classique, je possède une expertise en Computer Vision, me permettant d'intégrer des fonctionnalités d'analyse d'image et d'intelligence artificielle dans mes projets.",
            p3: "Mon objectif : créer des solutions robustes, esthétiques et intelligentes.",
        },
        skills: {
            title: 'Compétences Techniques',
            subtitle: "Expertise en développement Full Stack Web, Mobile et Vision par Ordinateur.",
            categories: [
                {
                    name: "Langages de programmation",
                    items: ["PHP", "Javascript", "HTML", "CSS", "Ruby", "Python", "Dart", "C", "JAVA"]
                },
                {
                    name: "Frameworks",
                    items: ["Laravel", "React JS", "Typescript", "Django", "Rails", "Flutter", "React Native", "Bootstrap", "Tailwind CSS"]
                },
                {
                    name: "Bases de données",
                    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Firebase"]
                },
                {
                    name: "Outils",
                    items: ["Git", "GitHub", "CI/CD", "Trello", "Jira", "Docker"]
                },
                {
                    name: "Processus",
                    items: ["Méthodologie Agile", "Gestion de projet", "Revue de code", "Résolution de problèmes", "Rétrospectives"]
                }
            ]
        },
        projects: {
            title: 'Projets Réalisés',
            demo: 'Visiter',
            code: 'Code',
            items: [
                {
                    title: 'Kenaya Impact Cvthèque',
                    description: "Cvthèque pour l'ONG Kenaya Impact. Gestion complète des membres et recrutements.",
                    tags: ['Laravel', 'PHP', 'Vite'],
                    link: 'https://kenaya-impact.yulcom.net/',
                    github: 'https://github.com/Passing01'
                },
                {
                    title: 'NASA Bioscience Platform',
                    description: 'Plateforme de synthèse de données BIOSCIENCE de la NASA. Collaboration internationale (Pakistan, Mexique, USA).',
                    tags: ['Laravel', 'React JS', 'NASA API'],
                    link: 'https://nasa-bioscience.onrender.com/',
                    github: 'https://github.com/Passing01'
                },
                {
                    title: 'Health AI Agent',
                    description: "Agent IA sanitaire (Hackathon IBM WATSON ORCHESTRATE).",
                    tags: ['TypeScript', 'React JS', 'IBM Watson'],
                    link: 'https://ibm-agentic-hackathon-challenge-yhd.vercel.app/#get-started',
                    github: 'https://github.com/Passing01'
                },
                {
                    title: 'SN-BRAFASO',
                    description: 'Site institutionnel avec backoffice complet pour l\'entreprise SN-BRAFASO.',
                    tags: ['Laravel', 'Backoffice'],
                    github: 'https://github.com/Passing01'
                },
                {
                    title: 'BTP Mobile App',
                    description: 'Application mobile de gestion pour le secteur du BTP (En cours de conception).',
                    tags: ['Flutter', 'Mobile'],
                    github: 'https://github.com/Passing01'
                },
                {
                    title: 'BIPIA International',
                    description: 'Site institutionnel pour l\'entreprise BIPIA INTERNATIONAL.',
                    tags: ['Laravel'],
                    link: 'https://bipia-international.com',
                    github: 'https://github.com/Passing01'
                },
                {
                    title: 'Auction Platform',
                    description: 'Plateforme de vente aux enchères en ligne.',
                    tags: ['Ruby on Rails'],
                    github: 'https://github.com/Passing01'
                }
            ]
        },
        certificates: { // New Section
            title: 'Mes Certificats',
            subtitle: 'Reconnaissance de mes compétences et accomplissements.',
            view_all: 'Voir tous les certificats',
            items: [
                {
                    title: 'Développeur Full Stack (Niveau Intermédiaire)',
                    issuer: 'ETP4A',
                    date: '2025',
                    description: 'Certification de développeur Full Stack niveau intermédiaire.',
                    pdf: '/Certificat_ETP4A_Abdoul Rahim.pdf'
                },
                {
                    title: 'Développement Mobile (Niveau Débutant)',
                    issuer: 'Declic',
                    date: 'Octobre 2025',
                    description: 'Certificat de formation en développement mobile.',
                    image: '/_Badge_Développement_Mobile_(Niveau_débutant_-_Octobre_2025).png'
                },
                {
                    title: 'Développeur Django',
                    issuer: 'Bakeli Network',
                    date: '2025',
                    description: 'Certification de développeur backend avec le framework Django.',
                    pdf: '/certificat.pdf'
                },
                {
                    title: 'Sécurité des Réseaux',
                    issuer: 'Coursera',
                    date: '2025',
                    description: 'Sécurisation des infrastructures réseaux.',
                    pdf: '/Coursera Securite Reseaux Rahim Ouedraogo.pdf'
                },
                {
                    title: 'Risques de Sécurité',
                    issuer: 'Coursera',
                    date: '2025',
                    description: 'Analyse et gestion des risques informatiques.',
                    pdf: '/Coursera Risques de securite Rahim Ouedraogo.pdf'
                },
                {
                    title: 'Fondements de la Cybersécurité',
                    issuer: 'Coursera',
                    date: '2025',
                    description: 'Concepts de base et enjeux de la cybersécurité.',
                    pdf: '/Coursera Fondement Cybersecurite Rahim Ouedraogo.pdf'
                },
                {
                    title: 'Introduction au Développement Mobile',
                    issuer: 'Coursera',
                    date: '2025',
                    description: 'Principes fondamentaux du développement mobile.',
                    pdf: '/Coursera Introduction au Dev Mobile Rahim Ouedraogo.pdf'
                },
                {
                    title: 'Introduction au Développement de Jeux Vidéo',
                    issuer: 'Coursera',
                    date: '2025',
                    description: "Bases de la création de jeux vidéo.",
                    pdf: '/Coursera Introduction au Jeux Video Rahim Ouedraogo.pdf'
                },
                {
                    title: "Semaine de l'Intelligence Artificielle (SEINAR)",
                    issuer: 'SEINAR',
                    date: '2025',
                    description: "Certificat de participation à la semaine de l'IA.",
                    pdf: '/Rahim Ouedraogo_Certificat.pdf'
                },
                {
                    title: 'Agentic AI Challenge',
                    issuer: 'IBM Watson Orchestrate',
                    date: '2024',
                    description: 'Hackathon IBM - Intelligence Artificielle Agentique.',
                    image: '/ibm-watson-certificate.png'
                },
                {
                    title: 'NASA Space Apps Challenge',
                    issuer: 'NASA',
                    date: '2024',
                    description: 'Participation au challenge international NASA Space Apps.',
                    pdf: '/NASA Space Apps Challenge Ouedraogo Passing Abdoul Rahim.pdf'
                },
                {
                    title: 'Deep Learning with PyTorch',
                    issuer: 'Coursera',
                    date: '2023',
                    description: 'Certification spécialisée en Deep Learning.',
                    pdf: '/Coursera Deep learning with PyTorch.pdf'
                },
                {
                    title: 'Certificat de Complétion',
                    issuer: 'Coursera',
                    date: '2023',
                    description: 'Parcours de formation complet.',
                    pdf: '/Coursera Ouedraogo Passing Abdoul Rahim.pdf'
                },
                {
                    title: 'Certificat MBH',
                    issuer: 'MBH',
                    date: '2023',
                    description: 'Formation et certification MBH.',
                    pdf: '/certificat_mbh_OUEDRAOGO Passing Abdoul Rahim.pdf'
                }
            ]
        },
        resumePage: {
            download: "Télécharger PDF",
            contact_info: "Contact",
            summary_title: "Profil Professionnel",
            summary_text: "Développeur Web & Mobile Full Stack expérimenté avec une solide expertise en Computer Vision. Passionné par la création de solutions innovantes et performantes, j'ai collaboré sur des projets internationaux et locaux, allant de la gestion institutionnelle à l'intelligence artificielle.",
            experience_title: "Expérience Professionnelle",
            education_title: "Formation",
            skills_title: "Compétences",
            languages_title: "Langues",
            hobbies_title: "Centres d'intérêt",
            exp_items: [
                {
                    role: "Développeur Web Full Stack",
                    company: "YULCOM Technologie (Ouagadougou/Burkina Faso)",
                    period: "Depuis 2025",
                    description: "Conception et développement d'applications web robustes.",
                    achievements: [
                        "Conception et développement d'applications web robustes en utilisant HTML, CSS, Javascript, PHP, Laravel.",
                        "Utilisation des bases de données MySQL, SQLite, PostgreSQL.",
                        "Création d'applications Back-Office pour des entreprises.",
                        "Collaboration avec les équipes de design et de produit pour améliorer l'expérience utilisateur.",
                        "Optimisation des performances et mise en œuvre de l'intégration continue.",
                        "Développement et maintenance d'APIs RESTful pour la fluidité des données.",
                        "Participation aux tests et débogage pour garantir la qualité."
                    ]
                },
                {
                    role: "Développeur Web Full-Stack",
                    company: "ETP4AFRICA (Sénégal)",
                    period: "2024 - 2025",
                    description: "Développement et maintenance d'applications web dynamiques.",
                    achievements: [
                        "Technologies : JavaScript, Ruby on Rails, Node.js, MongoDB.",
                        "Collaboration avec les équipes design/produit pour des solutions user-centric.",
                        "Optimisation des performances web et bonnes pratiques.",
                        "Gestion de bases de données et serveurs (sécurité/intégrité)."
                    ]
                },
                {
                    role: "Développement Web",
                    company: "Bakeli Network (Sénégal)",
                    period: "2025 - 2025", // Keeping user's date, though overlapping slightly odd if ETP ends 2025 too.
                    description: "Conception et développement de sites web responsives.",
                    achievements: [
                        "Stack : HTML, CSS, JavaScript, PHP, Python (Django).",
                        "Création d'interfaces utilisateur attrayantes avec l'équipe design.",
                        "Intégration d'API pour fonctionnalités dynamiques.",
                        "Tests et optimisation des performances pour une expérience fluide.",
                        "Documentation des processus et suivi de projets."
                    ]
                }
            ],
            langs: ["Français (Natif)", "Anglais (Professionnel)"],
            hobbies: ["Intelligence Artificielle", "Contribution Open Source", "Hackathons"]
        },
        contact: {
            title: 'Me Contacter',
            subtitle: 'Un projet en tête ? Discutons-en.',
            email_label: 'Email',
            location_label: 'Localisation',
            form: {
                name: 'Nom',
                name_placeholder: 'Votre nom',
                email_placeholder: 'Votre email',
                message: 'Message',
                message_placeholder: 'Votre message',
                send: 'Envoyer',
                success: 'Message envoyé avec succès !',
                error: 'Une erreur est survenue, veuillez réessayer.',
            }
        },
        footer: {
            made_with: 'Fait avec',
            rights: 'Tous droits réservés.',
        },
        resume: {
            title: 'Mon CV',
            subtitle: 'Mon parcours professionnel.',
            download: 'Télécharger PDF',
            sections: {
                summary: 'Résumé',
                experience: 'Expérience',
                education: 'Education',
                skills: 'Compétences',
                projects: 'Projets',
                certificates: 'Certificats'
            }
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            resume: 'Resume',
            certificates: 'Certificates', // Added
            contact: 'Contact',
        },
        hero: {
            greeting: 'Hi, I am',
            name: 'Passing Abdoul Rahim OUEDRAOGO',
            title: 'Full Stack Developer',
            subtitle: 'Web & Mobile',
            description: "Specialized in React, Laravel, Django, Ruby on Rails, and Computer Vision. I transform complex ideas into high-performance applications.",
            cta_projects: 'View My Projects',
            cta_contact: 'Contact Me',
        },
        about: {
            title: 'About Me',
            p1: "Passionate Full Stack Developer, I seamlessly navigate between web (React, Laravel, Django, Rails) and mobile (React Native, Flutter).",
            p2: "Beyond classic development, I have expertise in Computer Vision, allowing me to integrate image analysis and artificial intelligence features into my projects.",
            p3: "My goal: to create robust, aesthetic, and intelligent solutions.",
        },
        skills: {
            title: 'Technical Skills',
            subtitle: "Expertise in Full Stack Web, Mobile development, and Computer Vision.",
            categories: [
                {
                    name: "Programming Languages",
                    items: ["PHP", "Javascript", "HTML", "CSS", "Ruby", "Python", "Dart", "C", "JAVA"]
                },
                {
                    name: "Frameworks",
                    items: ["Laravel", "React JS", "Typescript", "Django", "Rails", "Flutter", "React Native", "Bootstrap", "Tailwind CSS"]
                },
                {
                    name: "Databases",
                    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Firebase"]
                },
                {
                    name: "Tools",
                    items: ["Git", "GitHub", "CI/CD", "Trello", "Jira", "Docker"]
                },
                {
                    name: "Processes",
                    items: ["Agile Methodology", "Project Management", "Code Review", "Problem Solving", "Retrospectives"]
                }
            ]
        },
        projects: {
            title: 'Completed Projects',
            demo: 'Visit',
            code: 'Code',
            items: [
                {
                    title: 'Kenaya Impact CV Database',
                    description: "CV Database for NGO Kenaya Impact. Complete member and recruitment management.",
                    tags: ['Laravel', 'PHP', 'Vite'],
                    link: 'https://kenaya-impact.yulcom.net/',
                    github: 'https://github.com/Passing01'
                },
                {
                    title: 'NASA Bioscience Platform',
                    description: 'NASA BIOSCIENCE data synthesis platform. International collaboration (Pakistan, Mexico, USA).',
                    tags: ['Laravel', 'React JS', 'NASA API'],
                    link: 'https://nasa-bioscience.onrender.com/',
                    github: 'https://github.com/Passing01'
                },
                {
                    title: 'Health AI Agent',
                    description: "Health AI Agent (IBM WATSON ORCHESTRATE Hackathon).",
                    tags: ['TypeScript', 'React JS', 'IBM Watson'],
                    link: 'https://ibm-agentic-hackathon-challenge-yhd.vercel.app/#get-started',
                    github: 'https://github.com/Passing01'
                },
                {
                    title: 'SN-BRAFASO',
                    description: 'Institutional website with complete backoffice for SN-BRAFASO.',
                    tags: ['Laravel', 'Backoffice'],
                    github: 'https://github.com/Passing01'
                },
                {
                    title: 'BTP Mobile App',
                    description: 'Construction management mobile app (Work in Progress).',
                    tags: ['Flutter', 'Mobile'],
                    github: 'https://github.com/Passing01'
                },
                {
                    title: 'BIPIA International',
                    description: 'Institutional website for BIPIA INTERNATIONAL.',
                    tags: ['Laravel'],
                    link: 'https://bipia-international.com',
                    github: 'https://github.com/Passing01'
                },
                {
                    title: 'Auction Platform',
                    description: 'Online auction platform.',
                    tags: ['Ruby on Rails'],
                    github: 'https://github.com/Passing01'
                }
            ]
        },
        certificates: { // New Section
            title: 'My Certificates',
            subtitle: 'Recognition of my skills and achievements.',
            view_all: 'View All Certificates',
            items: [
                {
                    title: 'Full Stack Developer (Intermediate Level)',
                    issuer: 'ETP4A',
                    date: '2024',
                    description: 'Intermediate level Full Stack developer certification.',
                    pdf: '/Certificat_ETP4A_Abdoul Rahim.pdf'
                },
                {
                    title: 'Mobile Development (Beginner Level)',
                    issuer: 'Declic',
                    date: 'October 2025',
                    description: 'Mobile development training certificate.',
                    image: '/_Badge_Développement_Mobile_(Niveau_débutant_-_Octobre_2025).png'
                },
                {
                    title: 'Django Developer',
                    issuer: 'Bakeli Network',
                    date: '2025',
                    description: 'Backend developer certification with Django framework.',
                    pdf: '/certificat.pdf'
                },
                {
                    title: 'Network Security',
                    issuer: 'Coursera',
                    date: '2025',
                    description: 'Securing network infrastructures.',
                    pdf: '/Coursera Securite Reseaux Rahim Ouedraogo.pdf'
                },
                {
                    title: 'Security Risks',
                    issuer: 'Coursera',
                    date: '2025',
                    description: 'Analysis and management of IT risks.',
                    pdf: '/Coursera Risques de securite Rahim Ouedraogo.pdf'
                },
                {
                    title: 'Cybersecurity Foundations',
                    issuer: 'Coursera',
                    date: '2025',
                    description: 'Basic concepts and challenges of cybersecurity.',
                    pdf: '/Coursera Fondement Cybersecurite Rahim Ouedraogo.pdf'
                },
                {
                    title: 'Introduction to Mobile Development',
                    issuer: 'Coursera',
                    date: '2025',
                    description: 'Fundamental principles of mobile development.',
                    pdf: '/Coursera Introduction au Dev Mobile Rahim Ouedraogo.pdf'
                },
                {
                    title: 'Introduction to Video Game Development',
                    issuer: 'Coursera',
                    date: '2025',
                    description: "Basics of video game creation.",
                    pdf: '/Coursera Introduction au Jeux Video Rahim Ouedraogo.pdf'
                },
                {
                    title: "Artificial Intelligence Week (SEINAR)",
                    issuer: 'SEINAR',
                    date: '2025',
                    description: "Participation certificate for the AI week.",
                    pdf: '/Rahim Ouedraogo_Certificat.pdf'
                },
                {
                    title: 'IBM Watson Orchestrate',
                    issuer: 'IBM',
                    date: '2025',
                    description: 'Hackathon Agentic AI Challenge',
                    image: '/ibm-watson-certificate.png'
                },
                {
                    title: 'Full Stack Development',
                    issuer: 'ETP4A',
                    date: '2023',
                    description: 'Professional Certificate',
                    image: '/meta_certificate.jpg'
                },
                {
                    title: 'Agentic AI Challenge',
                    issuer: 'IBM Watson Orchestrate',
                    date: '2025',
                    description: 'IBM Hackathon - Agentic Artificial Intelligence.',
                    image: '/ibm-watson-certificate.png'
                },
                {
                    title: 'NASA Space Apps Challenge',
                    issuer: 'NASA',
                    date: '2025',
                    description: 'Participation in the international NASA Space Apps challenge.',
                    pdf: '/NASA Space Apps Challenge Ouedraogo Passing Abdoul Rahim.pdf'
                },
                {
                    title: 'Deep Learning with PyTorch',
                    issuer: 'Coursera',
                    date: '2025',
                    description: 'Specialized certification in Deep Learning.',
                    pdf: '/Coursera Deep learning with PyTorch.pdf'
                },
                {
                    title: 'Certificate of Completion',
                    issuer: 'Coursera',
                    date: '2025',
                    description: 'Complete training path.',
                    pdf: '/Coursera Ouedraogo Passing Abdoul Rahim.pdf'
                },
                {
                    title: 'MBH Certificate',
                    issuer: 'MBH',
                    date: '2025',
                    description: 'MBH training and certification.',
                    pdf: '/certificat_mbh_OUEDRAOGO Passing Abdoul Rahim.pdf'
                }
            ]
        },
        resumePage: {
            download: "Download PDF",
            contact_info: "Contact",
            summary_title: "Professional Summary",
            summary_text: "Experienced Full Stack Web & Mobile Developer with strong expertise in Computer Vision. Passionate about building innovative and high-performance solutions, I have collaborated on international and local projects, ranging from institutional management to artificial intelligence.",
            experience_title: "Professional Experience",
            education_title: "Education",
            skills_title: "Skills",
            languages_title: "Languages",
            hobbies_title: "Hobbies",
            exp_items: [
                {
                    role: "Full Stack Web Developer",
                    company: "YULCOM Technologie (Ouagadougou/Burkina Faso)",
                    period: "Since 2025",
                    description: "Design and development of robust web applications.",
                    achievements: [
                        "Design and development using HTML, CSS, Javascript, PHP, Laravel.",
                        "Database management: MySQL, SQLite, PostgreSQL.",
                        "Creation of Back-Office applications for companies.",
                        "Collaboration with design/product teams for UX improvement.",
                        "Performance optimization and CI/CD implementation.",
                        "RESTful API development and maintenance.",
                        "Testing and debugging to ensure quality."
                    ]
                },
                {
                    role: "Full Stack Web Developer",
                    company: "ETP4AFRICA (Senegal)",
                    period: "2024 - 2025",
                    description: "Development and maintenance of dynamic web apps.",
                    achievements: [
                        "Technologies: JavaScript, Ruby on Rails, Node.js, MongoDB.",
                        "Collaboration for user-centric solutions.",
                        "Web performance optimization and best practices.",
                        "Database and server management (security/integrity)."
                    ]
                },
                {
                    role: "Web Development",
                    company: "Bakeli Network (Senegal)",
                    period: "2025 - 2025",
                    description: "Design and development of responsive websites.",
                    achievements: [
                        "Stack: HTML, CSS, JavaScript, PHP, Python (Django).",
                        "UI creation with design team.",
                        "API integration for dynamic features.",
                        "Performance testing and optimization.",
                        "Process documentation and project tracking."
                    ]
                }
            ],
            edu_items: [
                {
                    degree: "Computer Science / Software Development",
                    school: "University / School",
                    year: "202x - 202x"
                }
            ],
            langs: ["French (Native)", "English (Professional)"],
            hobbies: ["Artificial Intelligence", "Open Source Contribution", "Hackathons"]
        },
        contact: {
            title: 'Contact Me',
            subtitle: 'Have a project in mind? Let\'s talk.',
            email_label: 'Email',
            location_label: 'Location',
            form: {
                name: 'Name',
                name_placeholder: 'Your name',
                email_placeholder: 'Your email',
                message: 'Message',
                message_placeholder: 'Your message',
                send: 'Send',
                success: 'Message sent successfully!',
                error: 'An error occurred, please try again.',
            }
        },
        footer: {
            made_with: 'Made with',
            rights: 'All rights reserved.',
        },

        resume: {
            title: 'Resume',
            subtitle: 'My professional journey.',
            download: 'Download PDF',
            sections: {
                summary: 'Summary',
                experience: 'Experience',
                education: 'Education',
                skills: 'Skills',
                projects: 'Projects',
                certificates: 'Certificates'
            }
        }
    }
};
