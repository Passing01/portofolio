# Guide de Déploiement Gratuit sur Vercel

Voici les étapes simples pour mettre votre portfolio en ligne gratuitement avec Vercel.

## Prérequis
*   Avoir un compte [GitHub](https://github.com/) (Gratuit).
*   Avoir un compte [Vercel](https://vercel.com/) (Gratuit, vous pouvez vous connecter avec GitHub).

## Méthode Recommandée (Via GitHub)

C'est la méthode la plus simple et elle mettra à jour votre site automatiquement à chaque fois que vous sauvegardez des modifications.

### Étape 1 : Mettre votre code sur GitHub
1.  Ouvrez votre terminal (PowerShell ou CMD) dans le dossier du projet.
2.  Initialisez git (si ce n'est pas déjà fait) :
    ```bash
    git init
    ```
3.  Ajoutez tous vos fichiers :
    ```bash
    git add .
    ```
4.  Faites votre premier "commit" (sauvegarde) :
    ```bash
    git commit -m "Premier déploiement"
    ```
5.  Allez sur [GitHub.com](https://github.com/new) et créez un **nouveau repository** (laissez-le "Public").
6.  Copiez les commandes que GitHub vous donne sous le titre **"…or push an existing repository from the command line"**. Elles ressembleront à ceci :
    ```bash
    git remote add origin https://github.com/VOTRE_NOM/votre-projet.git
    git branch -M main
    git push -u origin main
    ```
7.  Collez et exécutez ces commandes dans votre terminal.

### Étape 2 : Connecter Vercel
1.  Allez sur le tableau de bord [Vercel](https://vercel.com/dashboard).
2.  Cliquez sur le bouton **"Add New..."** -> **"Project"**.
3.  Vous verrez votre projet GitHub dans la liste "Import Git Repository". Cliquez sur **"Import"**.
4.  **Configuration** :
    *   **Framework Preset** : Vercel devrait détecter "Vite" automatiquement.
    *   **Root Directory** : `./` (laisser tel quel).
    *   **Build Command** : `npm run build` (détecté auto).
    *   **Output Directory** : `dist` (détecté auto).
5.  Cliquez sur **"Deploy"**.

### C'est fini !
Vercel va construire votre site. Une fois terminé (environ 1 minute), vous aurez une URL du type `mon-portfolio.vercel.app` que vous pourrez partager partout.

---

## Méthode Alternative (Via Vercel CLI)

Si vous ne voulez pas utiliser GitHub, vous pouvez déployer directement depuis votre terminal.

1.  Installez Vercel globalement :
    ```bash
    npm i -g vercel
    ```
2.  Connectez-vous :
    ```bash
    vercel login
    ```
3.  Déployez :
    ```bash
    vercel
    ```
4.  Répondez aux questions (appuyez sur **Entrée** pour accepter les options par défaut pour tout).

Pour les mises à jour futures, tapez simplement `vercel --prod`.
