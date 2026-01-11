import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About",
        "skills": "Skills",
        "projects": "Projects",
        "contact": "Contact"
      },
      "hero": {
        "greeting": "Hello, I am",
        "title": "Full Stack Web & Mobile Developer",
        "description": "Specialized in React, Laravel, Django, Ruby on Rails and Computer Vision. I transform complex ideas into high-performance applications.",
        "cta_projects": "View Projects",
        "cta_contact": "Contact Me"
      },
      "about": {
        "title": "About Me",
        "p1": "Passionate Full Stack Developer, I juggle easily between web (React, Laravel, Django, Rails) and mobile (React Native, Flutter).",
        "p2": "Beyond classic development, I have expertise in <strong>Computer Vision</strong>, allowing me to integrate image analysis and artificial intelligence features into my projects.",
        "p3": "My goal: create robust, aesthetic, and intelligent solutions."
      },
      "skills": {
        "title": "Technical Skills",
        "subtitle": "Expertise in Full Stack Web, Mobile, and Computer Vision Development."
      },
      "projects": {
        "title": "Recent Projects",
        "demo": "Demo",
        "code": "Code"
      },
      "contact": {
        "title": "Contact Me",
        "subtitle": "Have a project in mind? Let's discuss.",
        "info": "Information",
        "location": "Location",
        "name": "Name",
        "email": "Email",
        "message": "Message",
        "send": "Send Message"
      },
      "footer": {
        "rights": "All rights reserved.",
        "made_with": "Made with"
      }
    }
  },
  fr: {
    translation: {
      "nav": {
        "home": "Accueil",
        "about": "À propos",
        "skills": "Compétences",
        "projects": "Projets",
        "contact": "Contact"
      },
      "hero": {
        "greeting": "Bonjour, je suis",
        "title": "Développeur Web & Mobile Full Stack",
        "description": "Spécialisé en React, Laravel, Django, Ruby on Rails et vision par ordinateur. Je transforme des idées complexes en applications performantes.",
        "cta_projects": "Voir mes projets",
        "cta_contact": "Me contacter"
      },
      "about": {
        "title": "À propos de moi",
        "p1": "Développeur Full Stack passionné, je jongle avec aisance entre le web (React, Laravel, Django, Rails) et le mobile (React Native, Flutter).",
        "p2": "Au-delà du développement classique, je possède une expertise en <strong>Computer Vision</strong>, me permettant d'intégrer des fonctionnalités d'analyse d'image et d'intelligence artificielle dans mes projets.",
        "p3": "Mon objectif : créer des solutions robustes, esthétiques et intelligentes."
      },
      "skills": {
        "title": "Compétences Techniques",
        "subtitle": "Expertise en développement Full Stack Web, Mobile et Vision par Ordinateur."
      },
      "projects": {
        "title": "Projets Récents",
        "demo": "Demo",
        "code": "Code"
      },
      "contact": {
        "title": "Me Contacter",
        "subtitle": "Un projet en tête ? Discutons-en.",
        "info": "Informations",
        "location": "Localisation",
        "name": "Nom",
        "email": "Email",
        "message": "Message",
        "send": "Envoyer"
      },
      "footer": {
        "rights": "Tous droits réservés.",
        "made_with": "Fait avec"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
