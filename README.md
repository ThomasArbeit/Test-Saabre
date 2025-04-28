# Car Listing App

Une application de listing de voitures développée avec **Next.js**.  
Elle permet de consulter une liste paginée de véhicules récupérée via une API externe, ainsi que d'afficher dynamiquement les détails d'un véhicule spécifique basé sur son **ID**.

## Fonctionnalités

- **Liste paginée des véhicules** : Affiche les véhicules disponibles avec un système de pagination.
- **Détail d'un véhicule** : Accède aux informations détaillées d'un véhicule spécifique grâce à une page dynamique basée sur l'ID.
- **Navigation fluide** entre la liste et les pages de détail.
- **Redirection automatique** de la page d'accueil (`/`) vers `/vehicules`, permettant d'éventuelles évolutions futures sur la home.

## Technologies utilisées

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [API REST externe]
- CSS Modules / Tailwind CSS / autre (préciser si besoin)

## Installation

1. Clone le projet :

```bash
git clone https://github.com/ThomasArbeit/Test-Saabre.git
```

2. Installe les dépendances :

```bash
npm install
```

ou

```bash
yarn install
```

3. Lance le serveur de développement :

```bash
npm run dev
```

ou

```bash
yarn dev
```

4. Accède à l'application sur :

```
http://localhost:3000
```

## Comment ça fonctionne ?

- **Page `/vehicules`** : Récupère la liste paginée de véhicules via un appel API.
- **Page `/vehicules/[id]`** : Récupère dynamiquement les informations d'un véhicule basé sur l'ID de l'URL.
- **Page `/`** : Redirige automatiquement vers `/vehicules`.

## Améliorations possibles

- Ajout de filtres de recherche (par marque, modèle, prix, etc.).
- Ajout de favoris pour sauvegarder des véhicules intéressants.
- Amélioration du design pour une meilleure expérience utilisateur (UX).
- Récuperer les bonnes images correspondantes aux voitures.

